import config from "@/config";
import { ButtonCheckout } from "@/components/landing-components";
import { FC } from "react";
import { PricingProps } from "./types";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing: FC<PricingProps> = ({
  ctaText = "Don't waste your time on integrations. Build and ship your app in days.",
}) => {
  return (
    <section className="overflow-hidden bg-white" id="pricing">
      <div className="max-w-5xl px-8 py-24 mx-auto">
        <div className="flex flex-col items-center justify-center w-full mb-20 text-center">
          <div className="px-3 py-2 bg-violet-700 bg-opacity-5 rounded-[200px] border border-surface-brand justify-start items-end gap-2 pr-4 flex mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M15 13.4053C15 13.8157 14.9192 14.222 14.7621 14.6012C14.6051 14.9803 14.3749 15.3248 14.0847 15.615C13.7945 15.9052 13.45 16.1354 13.0709 16.2924C12.6917 16.4494 12.2854 16.5303 11.875 16.5303H10V10.2803H11.875C12.2854 10.2803 12.6917 10.3611 13.0709 10.5181C13.45 10.6752 13.7945 10.9054 14.0847 11.1956C14.3749 11.4857 14.6051 11.8302 14.7621 12.2094C14.9192 12.5885 15 12.9949 15 13.4053ZM8.75 4.03027C7.9212 4.03027 7.12634 4.35951 6.54029 4.94556C5.95424 5.53162 5.625 6.32647 5.625 7.15527C5.625 7.98408 5.95424 8.77893 6.54029 9.36498C7.12634 9.95103 7.9212 10.2803 8.75 10.2803H10V4.03027H8.75Z"
                fill="#3E00FA"
              />
              <path
                d="M11.875 9.65527H10.625V4.65527H11.25C11.913 4.65527 12.5489 4.91867 13.0178 5.38751C13.4866 5.85635 13.75 6.49223 13.75 7.15527C13.75 7.32103 13.8158 7.48 13.9331 7.59722C14.0503 7.71443 14.2092 7.78027 14.375 7.78027C14.5408 7.78027 14.6997 7.71443 14.8169 7.59722C14.9342 7.48 15 7.32103 15 7.15527C14.999 6.16103 14.6035 5.2078 13.9005 4.50477C13.1975 3.80173 12.2442 3.40631 11.25 3.40527H10.625V2.15527C10.625 1.98951 10.5592 1.83054 10.4419 1.71333C10.3247 1.59612 10.1658 1.53027 10 1.53027C9.83424 1.53027 9.67527 1.59612 9.55806 1.71333C9.44085 1.83054 9.375 1.98951 9.375 2.15527V3.40527H8.75C7.75544 3.40527 6.80161 3.80036 6.09835 4.50362C5.39509 5.20688 5 6.16071 5 7.15527C5 8.14984 5.39509 9.10366 6.09835 9.80692C6.80161 10.5102 7.75544 10.9053 8.75 10.9053H9.375V15.9053H8.125C7.46196 15.9053 6.82607 15.6419 6.35723 15.173C5.88839 14.7042 5.625 14.0683 5.625 13.4053C5.625 13.2395 5.55915 13.0805 5.44194 12.9633C5.32473 12.8461 5.16576 12.7803 5 12.7803C4.83424 12.7803 4.67527 12.8461 4.55806 12.9633C4.44085 13.0805 4.375 13.2395 4.375 13.4053C4.37603 14.3995 4.77145 15.3527 5.47449 16.0558C6.17753 16.7588 7.13076 17.1542 8.125 17.1553H9.375V18.4053C9.375 18.571 9.44085 18.73 9.55806 18.8472C9.67527 18.9644 9.83424 19.0303 10 19.0303C10.1658 19.0303 10.3247 18.9644 10.4419 18.8472C10.5592 18.73 10.625 18.571 10.625 18.4053V17.1553H11.875C12.8696 17.1553 13.8234 16.7602 14.5267 16.0569C15.2299 15.3537 15.625 14.3998 15.625 13.4053C15.625 12.4107 15.2299 11.4569 14.5267 10.7536C13.8234 10.0504 12.8696 9.65527 11.875 9.65527ZM8.75 9.65527C8.08696 9.65527 7.45107 9.39188 6.98223 8.92304C6.51339 8.4542 6.25 7.81831 6.25 7.15527C6.25 6.49223 6.51339 5.85635 6.98223 5.38751C7.45107 4.91867 8.08696 4.65527 8.75 4.65527H9.375V9.65527H8.75ZM11.875 15.9053H10.625V10.9053H11.875C12.538 10.9053 13.1739 11.1687 13.6428 11.6375C14.1116 12.1063 14.375 12.7422 14.375 13.4053C14.375 14.0683 14.1116 14.7042 13.6428 15.173C13.1739 15.6419 12.538 15.9053 11.875 15.9053Z"
                fill="#3E00FA"
              />
            </svg>

            <span className="text-content-brand font-semibold leading-[18.20px] text-sm">
              Pricing
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
            {ctaText}
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          {(config.paymentProvider === "stripe"
            ? config.stripe.plans
            : config.lemonsqueezy.plans
          ).map((plan: any) => (
            <div
              key={plan.priceId ?? plan.variantId}
              className="relative w-full max-w-lg group"
            >
              {plan.isFeatured && (
                <div className="absolute top-0 z-20 -translate-x-1/2 -translate-y-1/2 left-1/2">
                  <span
                    className={`badge text-xs text-border-brand font-semibold border-1 border-border-brand bg-white`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {/* {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                ></div>
              )} */}
              <div
                className={`absolute -inset-[1px] rounded-[9px] bg-slate-200 z-10`}
              ></div>

              <div className="relative z-10 flex flex-col h-full gap-5 p-8 rounded-lg lg:gap-8 bg-base-100">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold lg:text-xl">{plan.name}</p>
                    {plan.description && (
                      <p className="mt-2 text-base-content/80">
                        {plan.description}
                      </p>
                    )}
                  </div>
                  {plan.freeDuration && (
                    <div>
                      <span className="p-1 text-xs font-bold rounded text-content-success bg-surface-success-hover">
                        {plan.freeDuration}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    {plan.priceAnchor && (
                      <div className="flex flex-col justify-end mb-[4px] text-lg ">
                        <p className="relative">
                          <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                          <span className="text-base-content/80">
                            ${plan.priceAnchor}
                          </span>
                        </p>
                      </div>
                    )}
                    <p
                      className={`text-5xl tracking-tight font-extrabold group-hover:scale-110 transition-all`}
                    >
                      ${plan.price}
                    </p>
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className="text-xs font-semibold uppercase text-base-content/60">
                        USD
                      </p>
                    </div>
                  </div>
                  <div>
                    {plan.duration && (
                      <span className="px-2 py-2 text-sm rounded bg-surface-brand-hover text-border-brand">
                        {plan.duration}
                      </span>
                    )}
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature: any, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M17.942 6.34732L7.94205 16.3473C7.884 16.4054 7.81507 16.4515 7.7392 16.483C7.66332 16.5144 7.58199 16.5306 7.49986 16.5306C7.41772 16.5306 7.3364 16.5144 7.26052 16.483C7.18465 16.4515 7.11572 16.4054 7.05767 16.3473L2.68267 11.9723C2.5654 11.855 2.49951 11.696 2.49951 11.5301C2.49951 11.3643 2.5654 11.2052 2.68267 11.0879C2.79995 10.9707 2.95901 10.9048 3.12486 10.9048C3.29071 10.9048 3.44977 10.9707 3.56705 11.0879L7.49986 15.0215L17.0577 5.46294C17.1749 5.34567 17.334 5.27979 17.4999 5.27979C17.6657 5.27979 17.8248 5.34567 17.942 5.46294C18.0593 5.58022 18.1252 5.73928 18.1252 5.90513C18.1252 6.07099 18.0593 6.23005 17.942 6.34732Z"
                            fill="#10B981"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout
                    priceId={plan.priceId}
                    variantId={plan.variantId}
                    placement="landing_page"
                    mode={plan.mode}
                  />
                  {/* For the Waitlist use this instead 👇 */}
                  {/* <ButtonLead extraStyle="!max-w-none !w-full" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
