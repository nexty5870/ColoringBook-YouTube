"use client";
import config from "@/config";
import { ButtonCheckout, ButtonLead } from "@/components/landing-components";
import { FC } from "react";
import { NSButton } from "@/components/base";

interface PricingProps {
  ctaText?: string;
}

const Pricing2: FC<PricingProps> = ({
  ctaText = "Don't waste your time on integrations. Build and ship your app in days.",
}) => {
  const handleClickContact = () => {
    window.open("mailto:support@nextstarter.ai", "_blank");
  };

  return (
    <section
      className="flex items-center justify-center w-full overflow-hidden bg-white"
      id="pricing"
    >
      <div className="flex flex-col items-center justify-center max-w-5xl px-8 py-24 mx-auto">
        <div className="flex flex-col items-center justify-center  w-[80%] mb-20 text-center ">
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

          <div className="text-content-secondary text-[16px] mt-8 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M20 12V18.75C20 18.9489 19.921 19.1397 19.7803 19.2803C19.6397 19.421 19.4489 19.5 19.25 19.5H5.75C5.55109 19.5 5.36032 19.421 5.21967 19.2803C5.07902 19.1397 5 18.9489 5 18.75V12H20Z"
                fill="#3E00FA"
              />
              <path
                d="M20.75 6.75033H17.4613C17.4978 6.71939 17.5353 6.68939 17.5709 6.65658C17.8557 6.40362 18.0851 6.09464 18.245 5.74894C18.4049 5.40325 18.4917 5.02829 18.5 4.64752C18.5123 4.23096 18.4394 3.81629 18.2856 3.42895C18.1319 3.0416 17.9006 2.68977 17.606 2.39505C17.3113 2.10033 16.9596 1.86893 16.5723 1.71508C16.185 1.56122 15.7703 1.48814 15.3538 1.50033C14.9728 1.50854 14.5977 1.59529 14.2518 1.75515C13.906 1.91502 13.5968 2.14455 13.3438 2.42939C12.9936 2.83523 12.7089 3.29325 12.5 3.78689C12.2911 3.29325 12.0064 2.83523 11.6562 2.42939C11.4032 2.14455 11.094 1.91502 10.7482 1.75515C10.4023 1.59529 10.0272 1.50854 9.64625 1.50033C9.22969 1.48814 8.81503 1.56122 8.42774 1.71508C8.04044 1.86893 7.68868 2.10033 7.39405 2.39505C7.09941 2.68977 6.86812 3.0416 6.71438 3.42895C6.56064 3.81629 6.48768 4.23096 6.5 4.64752C6.50833 5.02829 6.59514 5.40325 6.755 5.74894C6.91486 6.09464 7.14434 6.40362 7.42906 6.65658C7.46469 6.68752 7.50219 6.71752 7.53875 6.75033H4.25C3.85218 6.75033 3.47064 6.90837 3.18934 7.18967C2.90804 7.47098 2.75 7.85251 2.75 8.25033V11.2503C2.75 11.6482 2.90804 12.0297 3.18934 12.311C3.47064 12.5923 3.85218 12.7503 4.25 12.7503V18.7503C4.25 19.1482 4.40804 19.5297 4.68934 19.811C4.97064 20.0923 5.35218 20.2503 5.75 20.2503H19.25C19.6478 20.2503 20.0294 20.0923 20.3107 19.811C20.592 19.5297 20.75 19.1482 20.75 18.7503V12.7503C21.1478 12.7503 21.5294 12.5923 21.8107 12.311C22.092 12.0297 22.25 11.6482 22.25 11.2503V8.25033C22.25 7.85251 22.092 7.47098 21.8107 7.18967C21.5294 6.90837 21.1478 6.75033 20.75 6.75033ZM14.4688 3.42314C14.5875 3.29201 14.7321 3.18684 14.8934 3.11424C15.0547 3.04164 15.2293 3.00318 15.4062 3.00127H15.4522C15.6595 3.00257 15.8645 3.04523 16.0552 3.12677C16.2458 3.20831 16.4183 3.32709 16.5624 3.47613C16.7066 3.62517 16.8195 3.80149 16.8947 3.99474C16.9698 4.188 17.0056 4.39431 17 4.60158C16.9981 4.77849 16.9596 4.95309 16.887 5.11442C16.8144 5.27575 16.7093 5.42033 16.5781 5.53908C15.6884 6.32658 14.2119 6.60408 13.2969 6.70158C13.4094 5.70877 13.7188 4.26596 14.4688 3.42314ZM8.46031 3.45689C8.75088 3.16635 9.14441 3.00227 9.55531 3.00033H9.60125C9.77815 3.00224 9.95275 3.0407 10.1141 3.1133C10.2754 3.1859 10.42 3.29107 10.5388 3.42221C11.3253 4.31096 11.6028 5.78471 11.7003 6.69596C10.7891 6.60221 9.31531 6.32096 8.42656 5.53439C8.29543 5.41564 8.19026 5.27106 8.11766 5.10973C8.04506 4.9484 8.0066 4.7738 8.00469 4.59689C7.99887 4.38618 8.03593 4.17648 8.11361 3.98051C8.19128 3.78455 8.30796 3.6064 8.45656 3.45689H8.46031ZM4.25 8.25033H11.75V11.2503H4.25V8.25033ZM5.75 12.7503H11.75V18.7503H5.75V12.7503ZM19.25 18.7503H13.25V12.7503H19.25V18.7503ZM20.75 11.2503H13.25V8.25033H20.75V11.2503Z"
                fill="#3E00FA"
              />
            </svg>
            <div>
              <span className="inline-flex items-center gap-2 ml-1 font-semibold text-content-brand">
                100$ off
              </span>{" "}
              <span>for the first 1000 customers </span>
              <span className="font-semibold">(20 left)</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center w-full gap-8 lg:flex-row lg:items-stretch">
          {(config.paymentProvider === "stripe"
            ? config.stripe.plans
            : config.lemonsqueezy.plans
          ).map((plan: any) => (
            <div
              key={plan.priceId ?? plan.variantId}
              className={`relative group min-w-0 shrink-0 ${
                plan.isFeatured ? "lg:scale-105" : ""
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 z-20 -translate-x-1/2 -translate-y-1/2 left-1/2">
                  <span
                    className={`badge text-xs text-white font-semibold border-1 border-border-brand bg-border-brand`}
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
                className={`absolute -inset-[2px] rounded-lg ${
                  plan.isFeatured ? " bg-border-brand " : " bg-border-disabled"
                } z-10`}
              ></div>

              <div className="relative z-10 flex flex-col h-full gap-5 p-8 bg-white rounded-lg lg:gap-8">
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
                    {plan.price ? (
                      <p
                        className={`text-5xl tracking-tight font-extrabold group-hover:scale-110 transition-all`}
                      >
                        ${plan.price}
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-base-content/80">
                        Contact us
                      </p>
                    )}

                    {plan.price && (
                      <div className="flex flex-col justify-end mb-[4px]">
                        <p className="text-xs font-semibold uppercase text-base-content/60">
                          USD
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex xl:block sm:max-xl:max-w-[90px]">
                    {plan.duration && (
                      <span className="px-2 py-2 text-sm text-center rounded bg-surface-brand-hover text-border-brand">
                        {plan.duration}
                      </span>
                    )}
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2xs leading-relaxed text-base flex-1 lg:max-xl:max-w-[250px]">
                    {plan.features.map((feature: any, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        {feature.excluded ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M16.0672 15.1827C16.1253 15.2407 16.1713 15.3097 16.2027 15.3855C16.2342 15.4614 16.2503 15.5427 16.2503 15.6249C16.2503 15.707 16.2342 15.7883 16.2027 15.8642C16.1713 15.94 16.1253 16.009 16.0672 16.067C16.0091 16.1251 15.9402 16.1712 15.8643 16.2026C15.7884 16.234 15.7071 16.2502 15.625 16.2502C15.5429 16.2502 15.4616 16.234 15.3857 16.2026C15.3098 16.1712 15.2409 16.1251 15.1828 16.067L10 10.8835L4.81719 16.067C4.69991 16.1843 4.54085 16.2502 4.375 16.2502C4.20915 16.2502 4.05009 16.1843 3.93281 16.067C3.81554 15.9498 3.74965 15.7907 3.74965 15.6249C3.74965 15.459 3.81554 15.2999 3.93281 15.1827L9.11641 9.99986L3.93281 4.81705C3.81554 4.69977 3.74965 4.54071 3.74965 4.37486C3.74965 4.20901 3.81554 4.04995 3.93281 3.93267C4.05009 3.8154 4.20915 3.74951 4.375 3.74951C4.54085 3.74951 4.69991 3.8154 4.81719 3.93267L10 9.11627L15.1828 3.93267C15.3001 3.8154 15.4591 3.74951 15.625 3.74951C15.7909 3.74951 15.9499 3.8154 16.0672 3.93267C16.1845 4.04995 16.2503 4.20901 16.2503 4.37486C16.2503 4.54071 16.1845 4.69977 16.0672 4.81705L10.8836 9.99986L16.0672 15.1827Z"
                              fill="black"
                              fill-opacity="0.3"
                            />
                          </svg>
                        ) : (
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
                        )}

                        <span
                          className={` ${
                            feature.excluded
                              ? "text-base-content/60"
                              : "text-base-content"
                          }`}
                        >
                          {feature.name}
                        </span>
                        {feature.specialCase && (
                          <span className="text-base-content/60 bg-[#7DFFA2] px-2 text-center rounded-md text-[14px]">
                            {feature.specialCase}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  {plan.custom ? (
                    <NSButton
                      onClick={handleClickContact}
                      size="lg"
                      className="w-full mt-8 bg-content-brand"
                    >
                      {" "}
                      <div className="flex items-center justify-center gap-2">
                        {" "}
                        <svg
                          className="w-5 h-5 transition-transform duration-200 fill-primary-content group-hover:scale-110 group-hover:-rotate-3"
                          viewBox="0 0 375 509"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
                        </svg>
                        <span className="text-white ">Contact Sales</span>
                      </div>
                    </NSButton>
                  ) : (
                    <>
                      <ButtonCheckout
                        priceId={plan.priceId}
                        variantId={plan.variantId}
                        placement="landing_page"
                        mode={plan.mode}
                      />
                      {/* For the Waitlist use this instead 👇 */}
                      {/* <ButtonLead extraStyle="!max-w-none !w-full" /> */}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
