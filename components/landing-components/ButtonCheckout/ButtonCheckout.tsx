"use client";

import { useEffect, useState } from "react";
import apiClient from "@/libs/api";
import config from "@/config";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserResponse } from "@supabase/supabase-js";
import { ButtonCheckoutProps } from "./types";
import cn from "classnames";

const getSHA256Hash = async (input: string) => {
  const textAsBuffer = new TextEncoder()?.encode(input);
  const hashBuffer = await window?.crypto?.subtle?.digest(
    "SHA-256",
    textAsBuffer
  );
  const hashArray = Array?.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    ?.map((item) => item?.toString(16)?.padStart(2, "0"))
    ?.join("");
  return hash;
};

// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// Users must be authenticated. It will prefill the Checkout data with their email and/or credit card (if any)
// You can also change the mode to "subscription" if you want to create a subscription instead of a one-time payment
const ButtonCheckout = ({
  priceId,
  variantId,
  mode = "payment",
  placement = "landing_page",
  variant = "primary",
  text = "Get NextStarter.ai",
  withIcon = true,
}: ButtonCheckoutProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<UserResponse["data"]["user"]>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      setUser(data.user);
    };

    getUser();
  }, [supabase]);

  const handleClick = async () => {
    if (user) {
      await handlePayment();
    } else {
      window.location.href = config.auth.loginUrl;
    }
  };

  const handlePayment = async () => {
    // GOOGLE ADS EVENT NAME
    (window as any).dataLayer.push({
      event: "proceed_checkout",
      info: {
        placement: placement,
      },
    });
    setIsLoading(true);
    try {
      if (config.paymentProvider === "stripe") {
        const { url }: { url: string } = await apiClient.post(
          "/stripe/create-checkout",
          {
            priceId,
            successUrl: window.location.href,
            cancelUrl: window.location.href,
            mode,
          }
        );

        window.location.href = url;
      } else {
        const { url }: { url: string } = await apiClient.post(
          "/lemonsqueezy/create-checkout",
          {
            variantId,
            successUrl: window.location.href,
            cancelUrl: window.location.href,
            mode,
          }
        );

        window.location.href = url;
      }
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
    const hashedEmail = await getSHA256Hash(user.email);
    // TIKTOK PIXEL EVENT NAME
    (window as any).dataLayer.push({
      event: "InitiateCheckout",
      sha256_email: hashedEmail,
      content_id: variantId,
      contents: [
        {
          content_id: variantId,
          content_name: variantId,
          price: "19.00",
          quantity: 1,
          content_type: "Product",
        },
      ],
    });
  };

  return (
    <button
      className={cn(
        "btn btn-block group",
        variant === "primary"
          ? "btn-primary text-content-on-brand bg-surface-brand [&>svg]:fill-primary-content"
          : "flex justify-center items-center hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none h-11 text-base font-medium rounded-sm px-xs text-border-brand mt-8 [&>svg]:fill-border-brand bg-white"
      )}
      onClick={() => handleClick()}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        withIcon && (
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3"
            viewBox="0 0 375 509"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
          </svg>
        )
      )}
      {text}
    </button>
  );
};

export const ButtonUpgrade = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleManageSubscriptions = async () => {
    (window as any).dataLayer.push({
      event: "upgrade_plan",
    });
    setIsLoading(true);

    try {
      if (config.paymentProvider === "stripe") {
        const { url }: { url: string } = await apiClient.post(
          "/stripe/create-portal",
          {
            returnUrl: window.location.href,
          }
        );
        //window.open(url, "_blank");
        window.location.href = url;
      } else {
        const { url }: { url: string } = await apiClient.post(
          "/lemonsqueezy/create-portal",
          {
            returnUrl: window.location.href,
          }
        );
        //window.open(url, "_blank");
        window.location.href = url;
      }
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="btn btn-primary text-content-on-brand bg-surface-brand btn-block group"
      onClick={() => handleManageSubscriptions()}
    >
      {isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      Upgrade
    </button>
  );
};

export default ButtonCheckout;
