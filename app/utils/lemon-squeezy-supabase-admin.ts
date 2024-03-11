import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';
import { LemonSqueezy } from "@lemonsqueezy/lemonsqueezy.js";
import { ConfigProps } from '@/types';

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin privileges and overwrites RLS policies!
const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const ls = new LemonSqueezy(process.env.LEMONSQUEEZY_API_KEY);

const getCustomerId = async (
    uuid: string
) => {
    const { data, error } = await supabaseAdmin
        .from('lemon_squeezy_customers')
        .select('customer_id')
        .eq('id', uuid)
        .single();
    return data?.customer_id;
};

const upsertCustomerId = async (
    customerId: number,
    uuid: string
) => {
    const { data, error } = await supabaseAdmin
        .from('lemon_squeezy_customers')
        .select('customer_id')
        .eq('id', uuid)
        .single();
    if (error || !data?.customer_id) {
        // Now insert the customer ID into our Supabase mapping table.
        const { error: supabaseError } = await supabaseAdmin
            .from('lemon_squeezy_customers')
            .insert([{ id: uuid, customer_id: customerId }]);
        if (supabaseError) throw supabaseError;
        console.log(`New customer created and inserted for ${uuid}.`);
        return customerId;
    }
    return data.customer_id;
};

const manageSubscriptionStatusChange = async (
    subscriptionId: number,
    customerId: number,
    userId: string
) => {
    // Get customer's UUID from mapping table.
    await upsertCustomerId(customerId, userId)

    const subscription = await ls.getSubscription({
        id: subscriptionId,
        include: ["product"],
    });
    // Upsert the latest status of the subscription object.
    const subscriptionData: Database['public']['Tables']['lemon_squeezy_subscriptions']['Insert'] =
    {
        id: subscription.data.attributes.first_subscription_item.id,
        user_id: userId,
        metadata: {},
        status: subscription.data.attributes.status,
        variant_id: subscription.data.attributes.variant_id,
        cancelled: subscription.data.attributes.cancelled,
        created_at: subscription.data.attributes.created_at,
        updated_at: subscription.data.attributes.updated_at,
        ends_at: subscription.data.attributes.ends_at
            ? subscription.data.attributes.ends_at
            : null,
        renews_at: subscription.data.attributes.renews_at
            ? subscription.data.attributes.renews_at
            : null,
    };

    const { error } = await supabaseAdmin
        .from('lemon_squeezy_subscriptions')
        .upsert([subscriptionData]);
    if (error) throw error;
    console.log(
        `Inserted/updated subscription [${subscription.data.attributes.first_subscription_item.id}] for user [${userId}]`
    );
};

const addPlanToCustomer = async (
    plan: ConfigProps['lemonsqueezy']['plans'][number],
    userId: string) => {
    let { error } = await supabaseAdmin
        .rpc('add_credits', { x: plan.credits, user_id: userId })

    if (error) console.error(error)
    else console.log(`${plan.credits} credits added to user ${userId}`);
}

export {
    manageSubscriptionStatusChange,
    getCustomerId,
    addPlanToCustomer,
};