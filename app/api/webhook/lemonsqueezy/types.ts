export interface SubscriptionInvoiceObject {
    type: string;
    id: string;
    relationships: object;
    links: object;
    attributes: SubscriptionInvoiceAttributes;
}

interface SubscriptionInvoiceAttributes {
    /**
     * The ID of the Store this subscription invoice belongs to.
     */
    store_id: number;
    /**
     * The ID of the Subscription associated with this subscription invoice.
     */
    subscription_id: number;
    /**
     * The ID of the customer this subscription invoice belongs to.
     */
    customer_id: number;
    /**
     * The full name of the customer.
     */
    user_name: string;
    /**
     * The email address of the customer.
     */
    user_email: string;
    /**
     * The reason for the invoice being generated.
     */
    billing_reason: "initial" | "renewal" | "updated";
    /**
     * Lowercase brand of the card used to pay for the invoice.
     */
    card_brand: "visa" | "mastercard" | "amex" | "discover" | "jcb" | "diners" | "unionpay" | null;
    /**
     * The last 4 digits of the card used to pay for the invoice.
     */
    card_last_four: string | null;
    /**
     * The ISO 4217 currency code for the invoice
     */
    currency: string;
    /**
     * The currency conversion rate used to determine the price of the checkout in USD.
     */
    currency_rate: string;
    /**
     * The status of the invoice.
     */
    status: "pending" | "paid" | "void" | "refunded";
    /**
     * The formatted status of the invoice.
     */
    status_formatted: "Pending" | "Paid" | "Void" | "Refunded";
    /**
     * A boolean value indicating whether the invoice has been refunded.
     */
    refunded: boolean;
    /**
     * Date the order was refuned (ISO 8601 format).
     */
    refunded_at: string | null;
    /**
     * A positive integer in cents representing the subtotal of the invoice in the invoice currency.
     */
    subtotal: number;
    /**
     * A positive integer in cents representing the total discount value applied to the invoice in the invoice currency.
     */
    discount_total: number;
    /**
     * A positive integer in cents representing the tax applied to the invoice in the invoice currency.
     */
    tax: number;
    /**
     * A positive integer in cents representing the total cost of the invoice in the invoice currency.
     */
    total: number;
    /**
     * A positive integer in cents representing the subtotal of the invoice in USD.
     */
    subtotal_usd: number;
    /**
     * A positive integer in cents representing the total discount value applied to the invoice in USD.
     */
    discount_total_usd: number;
    /**
     * A positive integer in cents representing the tax applied to the invoice in USD.
     */
    tax_usd: number;
    /**
     * A positive integer in cents representing the total cost of the invoice in USD.
     */
    total_usd: number;
    /**
     * A human-readable string representing the subtotal of the invoice in the invoice currency (e.g. $9.99).
     */
    subtotal_formatted: string;
    /**
     * A human-readable string representing the total discount value applied to the invoice in the invoice currency (e.g. $9.99).
     */
    discount_total_formatted: string;
    /**
     * A human-readable string representing the tax applied to the invoice in the invoice currency (e.g. $9.99).
     */
    tax_formatted: string;
    /**
     * A human-readable string representing the total cost of the invoice in the invoice currency (e.g. $9.99).
     */
    total_formatted: string;
    /**
     * An object of customer-facing URLs for the invoice.
     */
    urls: {
        /**
         * The unique URL to download a PDF of the invoice (will be `null` if status is `pending`).
         */
        invoice_url: string | null;
    };
    /**
     * Date the subscription invoice was created (ISO 8601 format).
     */
    created_at: string;
    /**
     * Date the subscription invoice was updated (ISO 8601 format).
     */
    updated_at: string;
    /**
     * A boolean indicating if the subscription invoice was created within test mode.
     */
    test_mode: boolean;
}

export interface SubscriptionObject {
    type: string;
    id: string;
    relationships: object;
    links: object;
    attributes: SubscriptionAttributes;
}

interface SubscriptionAttributes {
    /**
     * The ID of the store this subscription belongs to.
     */
    store_id: number;
    /**
     * The ID of the customer this subscription belongs to.
     */
    customer_id: number;
    /**
     * The ID of the order associated with this subscription.
     */
    order_id: number;
    /**
     * The ID of the order item associated with this subscription.
     */
    order_item_id: number;
    /**
     * The ID of the product associated with this subscription.
     */
    product_id: number;
    /**
     * The ID of the variant associated with this subscription.
     */
    variant_id: number;
    /**
     * The name of the product.
     */
    product_name: string;
    /**
     * The name of the variant.
     */
    variant_name: string;
    /**
     * The full name of the customer.
     */
    user_name: string;
    /**
     * The email address of the customer.
     */
    user_email: string;
    /**
     * The status of the subscription.
     */
    status: "on_trial" | "active" | "paused" | "unpaid" | "cancelled" | "expired";
    /**
     * The title-case formatted status of the subscription.
     */
    status_formatted: "On Trial" | "Active" | "Paused" | "Unpaid" | "Cancelled" | "Expired";
    /**
     * Lowercase brand of the card used to pay for the latest subscription payment.
     */
    card_brand: "visa" | "mastercard" | "amex" | "discover" | "jcb" | "diners" | "unionpay" | null;
    /**
     * The last 4 digits of the card used to pay for the latest subscription payment.
     */
    card_last_four: string | null;
    /**
     * An object containing the payment collection pause behaviour options for the subscription, if set.
     */
    pause: {
        /**
         * Defines payment pause behaviour, can be one of:
         *
         *  - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged
         *  - `free` - Offer your subscription services for free, whilst halting payment collection
         */
        mode: 'void' | 'free';
        /**
         * An ISO-8601 formatted date-time string indicating when the subscription will continue collecting payments
         */
        resumes_at: string;
    } | null;
    /**
     * A boolean indicating if the subscription has been cancelled.
     */
    cancelled: boolean;
    /**
     * If the subscription has a free trial, an ISO-8601 formatted date-time indicating when the trial period ends.
     */
    trial_ends_at: string | null;
    /**
     * An integer representing the day of the month on which subscription invoice payments are collected.
     */
    billing_anchor: number;
    /**
     * An object representing the first subscription item belonging to this subscription.
     */
    first_subscription_item: {
        /**
         * ID of the subscription item.
         */
        id: number;
        /**
         * ID of the related subscription.
         */
        subscription_id: number;
        /**
         * ID of the subscription item's price.
         */
        price_id: number;
        /**
         * Quantity of the subscription item.
         */
        quantity: number;
        /**
         * Date the subscription item was created (ISO 8601 format).
         */
        created_at: string;
        /**
         * Date the subscription item was updated (ISO 8601 format).
         */
        updated_at: string;
    };
    /**
     * URLs for the customer to manage the subscription.
     */
    urls: {
        /**
         * A signed URL for managing payment and billing information for the subscription, valid for 24 hours.
         */
        update_payment_method: string;
        /**
         *  A pre-signed URL to the Customer Portal, which allows customers to fully manage their subscriptions and billing information from within your application. The URL is valid for 24 hours from time of request.
         */
        customer_portal: string;
    };
    /**
     * Date indicating the end of the current billing cycle, and when the next invoice will be issued (ISO 8601 format).
     */
    renews_at: string | null;
    /**
     * Date indicating when the subscription will expire or has expired (ISO 8601 format).
     */
    ends_at: string | null;
    /**
     * Date the subscription was created (ISO 8601 format).
     */
    created_at: string;
    /**
     * Date the subscription was updated (ISO 8601 format).
     */
    updated_at: string;
    /**
     * A boolean indicating if the customer was created within test mode.
     */
    test_mode: boolean;
}

export interface OrderObject {
    type: string;
    id: string;
    relationships: object;
    links: object;
    attributes: OrderAttributes;
}

interface OrderAttributes {
    /**
     * The ID of the store this order belongs to.
     */
    store_id: number;
    /**
     * The ID of the customer this order belongs to.
     */
    customer_id: number;
    /**
     * The unique identifier (UUID) for this order.
     */
    identifier: string;
    /**
     * An integer representing the sequential order number for this store.
     */
    order_number: number;
    /**
     * The full name of the customer.
     */
    user_name: string;
    /**
     * The email address of the customer.
     */
    user_email: string;
    /**
     * The ISO 4217 currency code for the order.
     */
    currency: string;
    /**
     * The currency conversion rate used to determine the price of the checkout in USD.
     */
    currency_rate: string;
    /**
     * A positive integer in cents representing the subtotal of the order in the order currency.
     */
    subtotal: number;
    /**
     * A positive integer in cents representing the total discount value applied to the order in the order currency.
     */
    discount_total: number;
    /**
     * A positive integer in cents representing the tax applied to the order in the order currency.
     */
    tax: number;
    /**
     * A positive integer in cents representing the total cost of the order in the order currency.
     */
    total: number;
    /**
     * A positive integer in cents representing the subtotal of the order in USD.
     */
    subtotal_usd: number;
    /**
     * A positive integer in cents representing the total discount value applied to the order in USD.
     */
    discount_total_usd: number;
    /**
     * A positive integer in cents representing the tax applied to the order in USD.
     */
    tax_usd: number;
    /**
     * A positive integer in cents representing the total cost of the order in USD.
     */
    total_usd: number;
    /**
     * The name of the tax rate applied to the order.
     */
    tax_name: string | null;
    /**
     * If tax is applied to the order, this will be the rate of tax displayed as a decimal percentage as a string.
     */
    tax_rate: string;
    /**
     * The status of the order.
     */
    status: "pending" | "failed" | "paid" | "refunded";
    /**
     * The formatted status of the order.
     */
    status_formatted: "Pending" | "Failed" | "Paid" | "Refunded";
    /**
     * A boolean indicating if the order has been refunded.
     */
    refunded: boolean;
    /**
     * Date the order was refuned (ISO 8601 format).
     */
    refunded_at: string | null;
    /**
     * A human-readable string representing the subtotal of the order in the order currency.
     */
    subtotal_formatted: string;
    /**
     * A human-readable string representing the total discount value applied to the order in the order currency.
     */
    discount_total_formatted: string;
    /**
     * A human-readable string representing the tax applied to the order in the order currency.
     */
    tax_formatted: string;
    /**
     * A human-readable string representing the total cost of the order in the order currency.
     */
    total_formatted: string;
    /**
     * An object representing the first order item belonging to this order.
     */
    first_order_item: {
        /**
         * The ID of the order item.
         */
        id: number;
        /**
         * The ID of the order.
         */
        order_id: number;
        /**
         * The ID of the product.
         */
        product_id: number;
        /**
         * The ID of the product variant.
         */
        variant_id: number;
        /**
         * The name of the product.
         */
        product_name: string;
        /**
         * The name of the product variant.
         */
        variant_name: string;
        /**
         * A positive integer in cents representing the price of the order item in the order currency.
         */
        price: number;
        /**
         * Date the order item was created (ISO 8601 format).
         */
        created_at: string;
        /**
         * Date the order item was updated (ISO 8601 format).
         */
        updated_at: string;
        /**
         * A boolean indicating if the order item was created within test mode.
         */
        test_mode: boolean;
    };
    urls: {
        /**
         * A signed URL for viewing the order in the customer's My Orders page.
         */
        receipt: string;
    };
    /**
     * Date the order was created (ISO 8601 format).
     */
    created_at: string;
    /**
     * Date the order was updated (ISO 8601 format).
     */
    updated_at: string;
    /**
     * A boolean indicating if the order was created within test mode.
     */
    test_mode: boolean;
}

export type WebhookBody<T> = {
    meta: {
        test_mode: boolean;
        event_name: string,
        custom_data?: any;
    },
    data: T
}