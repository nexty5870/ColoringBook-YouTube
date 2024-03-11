import { addPlanToCustomer, manageSubscriptionStatusChange } from '@/app/utils/lemon-squeezy-supabase-admin';
import crypto from "crypto";
import { OrderObject, SubscriptionInvoiceObject, SubscriptionObject, WebhookBody } from './types';
import config from '@/config';

const relevantEvents = new Set([
    'order_created',
    'subscription_updated',
    'subscription_cancelled',
    'subscription_payment_success'
]);

export async function POST(req: Request) {
    const body = await req.text();
    const hmac = crypto.createHmac("sha256", process.env.LEMONSQUEEZY_WEBHOOK_SECRET || "");
    const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
    const signature = Buffer.from(req.headers.get("x-signature") as string, "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
        return new Response("Invalid signature.", {
            status: 400,
        });
    }

    const eventName = req.headers.get("x-event-name") as string;
    if (relevantEvents.has(eventName)) {
        const payload = JSON.parse(body);
        try {
            if (eventName === 'subscription_payment_success') {
                const {
                    meta,
                    data: subscription,
                } = payload as WebhookBody<SubscriptionInvoiceObject>;
                await manageSubscriptionStatusChange(
                    subscription.attributes.subscription_id,
                    subscription.attributes.customer_id,
                    meta.custom_data.user_id,
                );
            } else if (eventName === 'subscription_updated' || eventName === 'subscription_cancelled') {
                const {
                    meta,
                    data: subscription,
                } = payload as WebhookBody<SubscriptionObject>;
                await manageSubscriptionStatusChange(
                    subscription.attributes.first_subscription_item.subscription_id,
                    subscription.attributes.customer_id,
                    meta.custom_data.user_id
                );
            } else if (eventName === 'order_created') {
                const {
                    meta,
                    data: order,
                } = payload as WebhookBody<OrderObject>;
                if (order.attributes.status === 'paid') {
                    const variantId = order.attributes.first_order_item.variant_id;
                    const userId = meta.custom_data.user_id;
                    const plan = config.lemonsqueezy.plans.find(price => price.variantId === variantId);
                    await addPlanToCustomer(plan, userId)
                }
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