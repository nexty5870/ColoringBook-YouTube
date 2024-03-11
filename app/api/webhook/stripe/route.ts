import Stripe from 'stripe';
import { stripe } from '@/app/utils/stripe';
import { upsertSubscription, addCreditsToCustomer } from '@/app/utils/stripe-supabase-admin';
import config from '@/config';

const relevantEvents = new Set([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'invoice.payment_succeeded',
  'checkout.session.completed',
]);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'checkout.session.completed':
          var session = event.data.object;
          if (session.mode === 'payment' && session.payment_status === 'paid') {
            session = await stripe.checkout.sessions.retrieve(session.id, {
              expand: ['line_items.data.price']
            });
            const priceId = session.line_items.data[0].price.id;
            const customerId = session.customer as string;
            const plan = config.stripe.plans.find(price => price.priceId === priceId);
            await addCreditsToCustomer(plan, customerId)
          }
          break;
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          // This event will be triggered in following scenarios:
          // - User started a subscription
          // - Subscribed user paid recurring fee
          // - Subscribed user payment failed for the recurring fee
          // - Subscribed user cancelled their subscription
          // - Subscribed user updated their plan
          var subscription = event.data.object;
          await upsertSubscription(
            subscription.id,
            subscription.customer as string
          );
          break;
        case 'invoice.payment_succeeded':
          if (event.data.object.billing_reason == 'subscription_create') {
            // The subscription automatically activates after successful payment
            // Set the payment method used to pay the first invoice
            // as the default payment method for that subscription
            const subscriptionId = event.data.object.subscription as string;
            const paymentIntentId = event.data.object.payment_intent as string;

            // Retrieve the payment intent used to pay the subscription
            const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

            try {
              await stripe.subscriptions.update(
                subscriptionId,
                {
                  default_payment_method: paymentIntent.payment_method as string,
                },
              );

              console.log("Default payment method set for subscription:" + paymentIntent.payment_method);
            } catch (err) {
              console.log(err);
              console.log(`⚠️  Falied to update the default payment method for subscription: ${subscriptionId}`);
            }
          }

          break;
        case 'invoice.payment_failed':
          // If the payment fails or the customer does not have a valid payment method,
          //  an invoice.payment_failed event is sent, the subscription becomes past_due.
          // Use this webhook to notify your user that their payment has
          // failed and to retrieve new card details.
          break;
        case 'invoice.finalized':
          // If you want to manually send out invoices to your customers
          // or store them locally to reference to avoid hitting Stripe rate limits.
          break;
        default:
          throw new Error('Unhandled relevant event!');
      }
    } catch (error) {
      console.log(error);
      return new Response(
        'Webhook handler failed. View your nextjs function logs.',
        {
          status: 400
        }
      );
    }
  }
  return new Response(JSON.stringify({ received: true }));
}