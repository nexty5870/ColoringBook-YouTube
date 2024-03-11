"use client";
import React from "react";
import config from "@/config";
import { ButtonCheckout } from "../ButtonCheckout";

const GetStartedButton2 = () => {
  return (
    <div>
      <ButtonCheckout
        priceId={config.stripe.plans[1].priceId}
        variantId={config.lemonsqueezy.plans[1].variantId}
        placement="landing_page"
        mode={config.lemonsqueezy.plans[1].mode}
        variant="secondary"
        text="Get NextStarter"
        withIcon={false}
      />
    </div>
  );
};

export default GetStartedButton2;
