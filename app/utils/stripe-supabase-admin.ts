import { toDateTime } from './helpers';
import { stripe } from './stripe';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';
import { ConfigProps } from '@/types';


// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin privileges and overwrites RLS policies!
const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const createOrRetrieveCustomer = async ({
    email,
    uuid
}: {
    email: string;
    uuid: string;
}) => {
    const { data, error } = await supabaseAdmin
        .from('stripe_customers')
        .select('customer_id')
        .eq('id', uuid)
        .single();
    if (error || !data?.customer_id) {
        // No customer record found, let's create one.
        const customerData: { metadata: { supabaseUUID: string }; email?: string } =
        {
            metadata: {
                supabaseUUID: uuid
            }
        };
        if (email) customerData.email = email;
        const customer = await stripe.customers.create(customerData);
        // Now insert the customer ID into our Supabase mapping table.
        const { error: supabaseError } = await supabaseAdmin
            .from('stripe_customers')
            .insert([{ id: uuid, customer_id: customer.id }]);
        if (supabaseError) throw supabaseError;
        console.log(`New customer created and inserted for ${uuid}.`);
        return customer.id;
    }
    return data.customer_id;
};

const upsertSubscription = async (
    subscriptionId: string,
    customerId: string
) => {
    // Get customer's UUID from mapping table.
    const { data: customerData, error: noCustomerError } = await supabaseAdmin
        .from('stripe_customers')
        .select('id')
        .eq('customer_id', customerId)
        .single();
    if (noCustomerError) throw noCustomerError;

    const { id: uuid } = customerData!;

    const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
        expand: ['default_payment_method']
    });
    // Upsert the latest status of the subscription object.
    const subscriptionData: Database['public']['Tables']['stripe_subscriptions']['Insert'] =
    {
        id: subscription.id,
        user_id: uuid,
        metadata: subscription.metadata,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id,
        cancel_at_period_end: subscription.cancel_at_period_end,
        cancel_at: subscription.cancel_at
            ? toDateTime(subscription.cancel_at).toISOString()
            : null,
        canceled_at: subscription.canceled_at
            ? toDateTime(subscription.canceled_at).toISOString()
            : null,
        current_period_start: toDateTime(
            subscription.current_period_start
        ).toISOString(),
        current_period_end: toDateTime(
            subscription.current_period_end
        ).toISOString(),
        created: toDateTime(subscription.created).toISOString(),
        ended_at: subscription.ended_at
            ? toDateTime(subscription.ended_at).toISOString()
            : null
    };

    const { error } = await supabaseAdmin
        .from('subscriptions')
        .upsert([subscriptionData]);
    if (error) throw error;
    console.log(
        `Inserted/updated subscription [${subscription.id}] for user [${uuid}]`
    );
};

const addCreditsToCustomer = async (
    plan: ConfigProps['stripe']['plans'][number],
    customerId: string) => {
    // Get customer's UUID from mapping table.
    const { data: customerData, error: noCustomerError } = await supabaseAdmin
        .from('stripe_customers')
        .select('id')
        .eq('customer_id', customerId)
        .single();
    if (noCustomerError) throw noCustomerError;

    const { id: userId } = customerData!;

    let { error } = await supabaseAdmin
        .rpc('add_credits', { x: plan.credits, user_id: userId })

    if (error) console.error(error)
    else console.log(`${plan.credits} credits added to user ${userId}`);
}

export {
    createOrRetrieveCustomer,
    upsertSubscription,
    addCreditsToCustomer,
};