export interface ButtonCheckoutProps {
    priceId: string;
    variantId: number;
    mode?: "payment" | "subscription";
    placement?: "inside_app" | "landing_page" | "docs";
    variant?: "primary" | "secondary";
    text?: string;
    withIcon?: boolean;
}