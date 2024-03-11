/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

import { CTAProps } from "./types";
import { ButtonCheckout } from "../ButtonCheckout";
import config from "@/config";

const CTA: FC<CTAProps> = ({
  description = "Don’t overthink, we’ve got you covered on everything you need.",
}) => {
  return (
    <div className="relative px-8 py-24 mx-auto">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full pointer-events-none">
        <img
          src="/assets/bottom-banner-dots.svg"
          alt="dots for bottom banner"
          className="absolute object-cover w-full h-full "
        />
      </div>

      <section
        className=" rounded-3xl mb-[73px] xl:mb-[100px] mx-auto flex xl:flex-row flex-col "
        style={{
          background: "linear-gradient(135deg, #3E00FA 0%, #6FA0FF 100%)",
        }}
      >
        <div className="pt-[50px] xl:pt-[68px] pb-[65px] xl:pb-[73px] text-center mx-auto flex flex-col items-center">
          <h3 className="font-black text-[36px] xs:text-[52px] xl:text-[54px] leading-none font-white mb-[50px] xl:mb-[30px] text-white max-w-[900px] mx-auto">
            {description}
          </h3>

          <div className="mt-8">
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
          <span className="flex items-start mt-8">
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
                fill="#7DFFA2"
              />
              <path
                d="M20.75 6.75033H17.4613C17.4978 6.71939 17.5353 6.68939 17.5709 6.65658C17.8557 6.40362 18.0851 6.09464 18.245 5.74894C18.4049 5.40325 18.4917 5.02829 18.5 4.64752C18.5123 4.23096 18.4394 3.81629 18.2856 3.42895C18.1319 3.0416 17.9006 2.68977 17.606 2.39505C17.3113 2.10033 16.9596 1.86893 16.5723 1.71508C16.185 1.56122 15.7703 1.48814 15.3538 1.50033C14.9728 1.50854 14.5977 1.59529 14.2518 1.75515C13.906 1.91502 13.5968 2.14455 13.3438 2.42939C12.9936 2.83523 12.7089 3.29325 12.5 3.78689C12.2911 3.29325 12.0064 2.83523 11.6562 2.42939C11.4032 2.14455 11.094 1.91502 10.7482 1.75515C10.4023 1.59529 10.0272 1.50854 9.64625 1.50033C9.22969 1.48814 8.81503 1.56122 8.42774 1.71508C8.04044 1.86893 7.68868 2.10033 7.39405 2.39505C7.09941 2.68977 6.86812 3.0416 6.71438 3.42895C6.56064 3.81629 6.48768 4.23096 6.5 4.64752C6.50833 5.02829 6.59514 5.40325 6.755 5.74894C6.91486 6.09464 7.14434 6.40362 7.42906 6.65658C7.46469 6.68752 7.50219 6.71752 7.53875 6.75033H4.25C3.85218 6.75033 3.47064 6.90837 3.18934 7.18967C2.90804 7.47098 2.75 7.85251 2.75 8.25033V11.2503C2.75 11.6482 2.90804 12.0297 3.18934 12.311C3.47064 12.5923 3.85218 12.7503 4.25 12.7503V18.7503C4.25 19.1482 4.40804 19.5297 4.68934 19.811C4.97064 20.0923 5.35218 20.2503 5.75 20.2503H19.25C19.6478 20.2503 20.0294 20.0923 20.3107 19.811C20.592 19.5297 20.75 19.1482 20.75 18.7503V12.7503C21.1478 12.7503 21.5294 12.5923 21.8107 12.311C22.092 12.0297 22.25 11.6482 22.25 11.2503V8.25033C22.25 7.85251 22.092 7.47098 21.8107 7.18967C21.5294 6.90837 21.1478 6.75033 20.75 6.75033ZM14.4688 3.42314C14.5875 3.29201 14.7321 3.18684 14.8934 3.11424C15.0547 3.04164 15.2293 3.00318 15.4062 3.00127H15.4522C15.6595 3.00257 15.8645 3.04523 16.0552 3.12677C16.2458 3.20831 16.4183 3.32709 16.5624 3.47613C16.7066 3.62517 16.8195 3.80149 16.8947 3.99474C16.9698 4.188 17.0056 4.39431 17 4.60158C16.9981 4.77849 16.9596 4.95309 16.887 5.11442C16.8144 5.27575 16.7093 5.42033 16.5781 5.53908C15.6884 6.32658 14.2119 6.60408 13.2969 6.70158C13.4094 5.70877 13.7188 4.26596 14.4688 3.42314ZM8.46031 3.45689C8.75088 3.16635 9.14441 3.00227 9.55531 3.00033H9.60125C9.77815 3.00224 9.95275 3.0407 10.1141 3.1133C10.2754 3.1859 10.42 3.29107 10.5388 3.42221C11.3253 4.31096 11.6028 5.78471 11.7003 6.69596C10.7891 6.60221 9.31531 6.32096 8.42656 5.53439C8.29543 5.41564 8.19026 5.27106 8.11766 5.10973C8.04506 4.9484 8.0066 4.7738 8.00469 4.59689C7.99887 4.38618 8.03593 4.17648 8.11361 3.98051C8.19128 3.78455 8.30796 3.6064 8.45656 3.45689H8.46031ZM4.25 8.25033H11.75V11.2503H4.25V8.25033ZM5.75 12.7503H11.75V18.7503H5.75V12.7503ZM19.25 18.7503H13.25V12.7503H19.25V18.7503ZM20.75 11.2503H13.25V8.25033H20.75V11.2503Z"
                fill="#7DFFA2"
              />
            </svg>
            <span className="text-white ">
              <span className="text-[#7DFFA2] ml-1 font-semibold">
                100$ off
              </span>{" "}
              for the first 1000 customers{" "}
              <span className="font-semibold">(20 left)</span>
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default CTA;
