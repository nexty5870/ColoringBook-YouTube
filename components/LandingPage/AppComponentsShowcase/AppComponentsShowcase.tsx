"use client";
import React, { FC, useState } from "react";
import cx from "classnames";
import Lottie from "lottie-react";
import bluePulseLottie from "../../../public/assets/lottie/blue-pulse-lottie.json";
import InternalLink from "@/components/docs/InternalLink/InternalLink";
import PromptBoxShowcase from "./PromptBoxShowcase/PromptBoxShowcase";
import { Step } from "@/components/app-components/Stepper/Stepper";
import { NSButton, NSIcon } from "@/components/base";
import {
  AnimatedTabs,
  FontSelector,
  Stepper,
} from "@/components/app-components";
import FontFaceObserver from "fontfaceobserver";

interface AppComponentsShowcaseProps {
  topIndicatorText?: string;
}

type AppComponentTypes =
  | "Prompt Input"
  | "Animated Tabs"
  | "Stepper"
  | "Font Selector";

interface AppComponentItem {
  title: AppComponentTypes;
  description: string;
  docsLink: string;
  tryMePlacement: "right" | "bottom";
}

const appComponents: AppComponentItem[] = [
  {
    title: "Prompt Input",
    description:
      "Nostrud ullamco nisi voluptate excepteur proident ea irure adipisicing consequat magna proident sit adipisicing officia.",
    docsLink: "/docs/components/prompt-input",
    tryMePlacement: "bottom",
  },
  {
    title: "Animated Tabs",
    description:
      "Excepteur aliqua commodo labore culpa ex reprehenderit irure incididunt occaecat occaecat nulla ipsum cillum.",
    docsLink: "/docs/components/animated-tabs",
    tryMePlacement: "bottom",
  },
  {
    title: "Stepper",
    description: "In irure sunt labore deserunt exercitation amet dolore.",
    docsLink: "/docs/components/stepper",
    tryMePlacement: "bottom",
  },
  {
    title: "Font Selector",
    description: "Id aute eiusmod laborum aliqua esse laborum ad amet.",
    docsLink: "/docs/components/font-selector",
    tryMePlacement: "bottom",
  },
];

const options = [
  {
    label: "Payments",
    value: "payments",
  },
  {
    label: "Authentication",
    value: "authentication",
  },
  {
    label: "SEO",
    value: "seo",
  },
  {
    label: "AI",
    value: "ai",
  },
];

const stepOptions: Step[] = [
  {
    label: "Step 1",
    value: "step-1",
    stepSvg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M18.5977 14.1966L13.7546 15.9779C13.6537 16.0148 13.5622 16.0732 13.4862 16.1492C13.4103 16.2251 13.3518 16.3167 13.3149 16.4175L11.5336 21.2607C11.4811 21.4031 11.3861 21.5259 11.2616 21.6127C11.137 21.6995 10.9889 21.7461 10.8371 21.7461C10.6853 21.7461 10.5371 21.6995 10.4126 21.6127C10.288 21.5259 10.1931 21.4031 10.1405 21.2607L8.35926 16.4175C8.32234 16.3167 8.26387 16.2251 8.18793 16.1492C8.112 16.0732 8.02042 16.0148 7.91958 15.9779L3.07645 14.1966C2.93404 14.144 2.81117 14.0491 2.72438 13.9245C2.63759 13.8 2.59106 13.6518 2.59106 13.5C2.59106 13.3482 2.63759 13.2001 2.72438 13.0755C2.81117 12.951 2.93404 12.856 3.07645 12.8035L7.91958 11.0222C8.02042 10.9853 8.112 10.9268 8.18793 10.8509C8.26387 10.775 8.32234 10.6834 8.35926 10.5825L10.1405 5.73942C10.1931 5.59701 10.288 5.47413 10.4126 5.38734C10.5371 5.30056 10.6853 5.25403 10.8371 5.25403C10.9889 5.25403 11.137 5.30056 11.2616 5.38734C11.3861 5.47413 11.4811 5.59701 11.5336 5.73942L13.3149 10.5825C13.3518 10.6834 13.4103 10.775 13.4862 10.8509C13.5622 10.9268 13.6537 10.9853 13.7546 11.0222L18.5977 12.8035C18.7401 12.856 18.863 12.951 18.9498 13.0755C19.0366 13.2001 19.0831 13.3482 19.0831 13.5C19.0831 13.6518 19.0366 13.8 18.9498 13.9245C18.863 14.0491 18.7401 14.144 18.5977 14.1966ZM13.4949 15.2812C13.2922 15.3556 13.1081 15.4732 12.9555 15.6259C12.8028 15.7786 12.6852 15.9626 12.6108 16.1653L10.8296 20.9897L9.05206 16.1616C8.97762 15.96 8.86038 15.7769 8.70841 15.6249C8.55644 15.4729 8.37336 15.3557 8.17175 15.2812L3.34738 13.5L8.17175 11.7188C8.37336 11.6443 8.55644 11.5271 8.70841 11.3751C8.86038 11.2231 8.97762 11.04 9.05206 10.8384L10.8333 6.01406L12.6146 10.8384C12.689 11.0411 12.8066 11.2252 12.9592 11.3778C13.1119 11.5305 13.2959 11.6481 13.4986 11.7225L18.323 13.5037L13.4949 15.2812ZM13.8333 3.75C13.8333 3.55109 13.9123 3.36032 14.053 3.21967C14.1936 3.07902 14.3844 3 14.5833 3H16.0833V1.5C16.0833 1.30109 16.1623 1.11032 16.303 0.96967C16.4436 0.829018 16.6344 0.75 16.8333 0.75C17.0322 0.75 17.223 0.829018 17.3636 0.96967C17.5043 1.11032 17.5833 1.30109 17.5833 1.5V3H19.0833C19.2822 3 19.473 3.07902 19.6136 3.21967C19.7543 3.36032 19.8333 3.55109 19.8333 3.75C19.8333 3.94891 19.7543 4.13968 19.6136 4.28033C19.473 4.42098 19.2822 4.5 19.0833 4.5H17.5833V6C17.5833 6.19891 17.5043 6.38968 17.3636 6.53033C17.223 6.67098 17.0322 6.75 16.8333 6.75C16.6344 6.75 16.4436 6.67098 16.303 6.53033C16.1623 6.38968 16.0833 6.19891 16.0833 6V4.5H14.5833C14.3844 4.5 14.1936 4.42098 14.053 4.28033C13.9123 4.13968 13.8333 3.94891 13.8333 3.75ZM23.5833 8.25C23.5833 8.44891 23.5043 8.63968 23.3636 8.78033C23.223 8.92098 23.0322 9 22.8333 9H22.0833V9.75C22.0833 9.94891 22.0043 10.1397 21.8636 10.2803C21.723 10.421 21.5322 10.5 21.3333 10.5C21.1344 10.5 20.9436 10.421 20.803 10.2803C20.6623 10.1397 20.5833 9.94891 20.5833 9.75V9H19.8333C19.6344 9 19.4436 8.92098 19.303 8.78033C19.1623 8.63968 19.0833 8.44891 19.0833 8.25C19.0833 8.05109 19.1623 7.86032 19.303 7.71967C19.4436 7.57902 19.6344 7.5 19.8333 7.5H20.5833V6.75C20.5833 6.55109 20.6623 6.36032 20.803 6.21967C20.9436 6.07902 21.1344 6 21.3333 6C21.5322 6 21.723 6.07902 21.8636 6.21967C22.0043 6.36032 22.0833 6.55109 22.0833 6.75V7.5H22.8333C23.0322 7.5 23.223 7.57902 23.3636 7.71967C23.5043 7.86032 23.5833 8.05109 23.5833 8.25Z"
          fill="#3E00FA"
        />
      </svg>
    ),
  },
  {
    label: "Step 2",
    value: "step-2",
    stepSvg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 5.25V8.25C19.5 8.44891 19.421 8.63968 19.2803 8.78033C19.1397 8.92098 18.9489 9 18.75 9C18.5511 9 18.3603 8.92098 18.2197 8.78033C18.079 8.63968 18 8.44891 18 8.25V6H12.75V18H15C15.1989 18 15.3897 18.079 15.5303 18.2197C15.671 18.3603 15.75 18.5511 15.75 18.75C15.75 18.9489 15.671 19.1397 15.5303 19.2803C15.3897 19.421 15.1989 19.5 15 19.5H9C8.80109 19.5 8.61032 19.421 8.46967 19.2803C8.32902 19.1397 8.25 18.9489 8.25 18.75C8.25 18.5511 8.32902 18.3603 8.46967 18.2197C8.61032 18.079 8.80109 18 9 18H11.25V6H6V8.25C6 8.44891 5.92098 8.63968 5.78033 8.78033C5.63968 8.92098 5.44891 9 5.25 9C5.05109 9 4.86032 8.92098 4.71967 8.78033C4.57902 8.63968 4.5 8.44891 4.5 8.25V5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H18.75C18.9489 4.5 19.1397 4.57902 19.2803 4.71967C19.421 4.86032 19.5 5.05109 19.5 5.25Z"
          fill="#3E00FA"
        />
      </svg>
    ),
  },
  {
    label: "Step 3",
    value: "step-3",
    stepSvg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6666 14.25V19.5C21.6666 19.8978 21.5086 20.2794 21.2273 20.5607C20.946 20.842 20.5645 21 20.1666 21H5.16663C4.7688 21 4.38727 20.842 4.10597 20.5607C3.82466 20.2794 3.66663 19.8978 3.66663 19.5V14.25C3.66663 14.0511 3.74564 13.8603 3.8863 13.7197C4.02695 13.579 4.21771 13.5 4.41663 13.5C4.61554 13.5 4.8063 13.579 4.94696 13.7197C5.08761 13.8603 5.16663 14.0511 5.16663 14.25V19.5H20.1666V14.25C20.1666 14.0511 20.2456 13.8603 20.3863 13.7197C20.5269 13.579 20.7177 13.5 20.9166 13.5C21.1155 13.5 21.3063 13.579 21.447 13.7197C21.5876 13.8603 21.6666 14.0511 21.6666 14.25ZM12.136 14.7806C12.2057 14.8504 12.2884 14.9057 12.3794 14.9434C12.4705 14.9812 12.5681 15.0006 12.6666 15.0006C12.7652 15.0006 12.8628 14.9812 12.9538 14.9434C13.0449 14.9057 13.1276 14.8504 13.1973 14.7806L16.9473 11.0306C17.0169 10.9609 17.0722 10.8782 17.1099 10.7872C17.1476 10.6961 17.167 10.5985 17.167 10.5C17.167 10.4015 17.1476 10.3039 17.1099 10.2128C17.0722 10.1218 17.0169 10.0391 16.9473 9.96937C16.8776 9.89969 16.7948 9.84442 16.7038 9.8067C16.6128 9.76899 16.5152 9.74958 16.4166 9.74958C16.3181 9.74958 16.2205 9.76899 16.1295 9.8067C16.0384 9.84442 15.9557 9.89969 15.886 9.96937L13.4166 12.4397V3.75C13.4166 3.55109 13.3376 3.36032 13.197 3.21967C13.0563 3.07902 12.8655 3 12.6666 3C12.4677 3 12.2769 3.07902 12.1363 3.21967C11.9956 3.36032 11.9166 3.55109 11.9166 3.75V12.4397L9.44725 9.96937C9.30652 9.82864 9.11565 9.74958 8.91663 9.74958C8.7176 9.74958 8.52673 9.82864 8.386 9.96937C8.24527 10.1101 8.16621 10.301 8.16621 10.5C8.16621 10.699 8.24527 10.8899 8.386 11.0306L12.136 14.7806Z"
          fill="#3E00FA"
        />
      </svg>
    ),
  },
];

const AppComponentsShowcase: FC<AppComponentsShowcaseProps> = ({
  topIndicatorText = "App Components",
}) => {
  const [activeComponent, setActiveComponent] = useState<AppComponentItem>(
    appComponents?.[0]
  );
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [activeStep, setActiveStep] = useState<Step>(stepOptions[0]);
  const [selectedFont, setSelectedFont] = useState<string>("");

  const changeSelectedFont = (fontFamily: string) => {
    setSelectedFont(fontFamily);
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>@import url('https://fonts.googleapis.com/css?family=${fontFamily}');</style>`
    );
    var font = new FontFaceObserver(fontFamily);
    font.load().then(() => {
      const fontElement = document.getElementById("font-display");
      fontElement.style.fontFamily = fontFamily;
    });
  };

  return (
    <section
      className="mx-10 my-10 flex max-lg:flex max-lg:flex-col max-lg:items-center rounded-2xl mb-[96px] py-8 relative"
      style={{
        background: "linear-gradient(135deg, #3E00FA 0%, #6FA0FF 100%)",
      }}
    >
      <div className="absolute bottom-[-150px] left-[-90px] w-[436px] h-[436px] max-sm:w-[200px] max-sm:h-[200px] bg-surface-brand rounded-full blur-[100px] opacity-10 z-10 pointer-events-none"></div>
      <div className="basis-[40%] max-lg:basis-[100%] pl-16 mt-auto mb-auto max-sm:p-3">
        <div className="inline-block">
          <div className="px-3 py-2 bg-white rounded-[200px] border border-surface-brand gap-2 pr-4 flex mb-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M15.2203 11.8306L11.1844 13.3149C11.1003 13.3457 11.024 13.3944 10.9607 13.4577C10.8975 13.521 10.8487 13.5973 10.818 13.6813L9.3336 17.7173C9.2898 17.836 9.21067 17.9384 9.10688 18.0107C9.00309 18.083 8.87963 18.1218 8.75313 18.1218C8.62663 18.1218 8.50317 18.083 8.39938 18.0107C8.29559 17.9384 8.21647 17.836 8.17266 17.7173L6.68829 13.6813C6.65752 13.5973 6.60879 13.521 6.54551 13.4577C6.48223 13.3944 6.40592 13.3457 6.32188 13.3149L2.28594 11.8306C2.16727 11.7868 2.06487 11.7076 1.99255 11.6038C1.92023 11.5001 1.88145 11.3766 1.88145 11.2501C1.88145 11.1236 1.92023 11.0001 1.99255 10.8963C2.06487 10.7926 2.16727 10.7134 2.28594 10.6696L6.32188 9.18525C6.40592 9.15448 6.48223 9.10576 6.54551 9.04248C6.60879 8.9792 6.65752 8.90288 6.68829 8.81884L8.17266 4.78291C8.21647 4.66423 8.29559 4.56184 8.39938 4.48951C8.50317 4.41719 8.62663 4.37842 8.75313 4.37842C8.87963 4.37842 9.00309 4.41719 9.10688 4.48951C9.21067 4.56184 9.2898 4.66423 9.3336 4.78291L10.818 8.81884C10.8487 8.90288 10.8975 8.9792 10.9607 9.04248C11.024 9.10576 11.1003 9.15448 11.1844 9.18525L15.2203 10.6696C15.339 10.7134 15.4414 10.7926 15.5137 10.8963C15.586 11.0001 15.6248 11.1236 15.6248 11.2501C15.6248 11.3766 15.586 11.5001 15.5137 11.6038C15.4414 11.7076 15.339 11.7868 15.2203 11.8306ZM10.968 12.7344C10.7991 12.7964 10.6457 12.8944 10.5185 13.0216C10.3913 13.1488 10.2932 13.3022 10.2313 13.4711L8.74688 17.4914L7.26563 13.468C7.20359 13.3 7.10589 13.1474 6.97925 13.0208C6.85261 12.8941 6.70004 12.7964 6.53204 12.7344L2.51172 11.25L6.53204 9.76562C6.70004 9.70359 6.85261 9.60589 6.97925 9.47925C7.10589 9.35261 7.20359 9.20004 7.26563 9.03203L8.75001 5.01172L10.2344 9.03203C10.2964 9.20093 10.3944 9.35431 10.5216 9.48153C10.6488 9.60875 10.8022 9.70676 10.9711 9.76875L14.9914 11.2531L10.968 12.7344ZM11.25 3.125C11.25 2.95924 11.3159 2.80027 11.4331 2.68306C11.5503 2.56585 11.7092 2.5 11.875 2.5H13.125V1.25C13.125 1.08424 13.1909 0.925268 13.3081 0.808058C13.4253 0.690848 13.5842 0.625 13.75 0.625C13.9158 0.625 14.0747 0.690848 14.1919 0.808058C14.3092 0.925268 14.375 1.08424 14.375 1.25V2.5H15.625C15.7908 2.5 15.9497 2.56585 16.0669 2.68306C16.1842 2.80027 16.25 2.95924 16.25 3.125C16.25 3.29076 16.1842 3.44973 16.0669 3.56694C15.9497 3.68415 15.7908 3.75 15.625 3.75H14.375V5C14.375 5.16576 14.3092 5.32473 14.1919 5.44194C14.0747 5.55915 13.9158 5.625 13.75 5.625C13.5842 5.625 13.4253 5.55915 13.3081 5.44194C13.1909 5.32473 13.125 5.16576 13.125 5V3.75H11.875C11.7092 3.75 11.5503 3.68415 11.4331 3.56694C11.3159 3.44973 11.25 3.29076 11.25 3.125ZM19.375 6.875C19.375 7.04076 19.3092 7.19973 19.1919 7.31694C19.0747 7.43415 18.9158 7.5 18.75 7.5H18.125V8.125C18.125 8.29076 18.0592 8.44973 17.9419 8.56694C17.8247 8.68415 17.6658 8.75 17.5 8.75C17.3342 8.75 17.1753 8.68415 17.0581 8.56694C16.9409 8.44973 16.875 8.29076 16.875 8.125V7.5H16.25C16.0842 7.5 15.9253 7.43415 15.8081 7.31694C15.6909 7.19973 15.625 7.04076 15.625 6.875C15.625 6.70924 15.6909 6.55027 15.8081 6.43306C15.9253 6.31585 16.0842 6.25 16.25 6.25H16.875V5.625C16.875 5.45924 16.9409 5.30027 17.0581 5.18306C17.1753 5.06585 17.3342 5 17.5 5C17.6658 5 17.8247 5.06585 17.9419 5.18306C18.0592 5.30027 18.125 5.45924 18.125 5.625V6.25H18.75C18.9158 6.25 19.0747 6.31585 19.1919 6.43306C19.3092 6.55027 19.375 6.70924 19.375 6.875Z"
                fill="#3E00FA"
              />
            </svg>

            <span className=" text-border-brand font-semibold leading-[18.20px] text-sm">
              {topIndicatorText}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6 max-lg:pr-5">
          {/** SELECTED COMPONENT INDICATOR */}
          <div className="w-[1px] bg-black/25 h-[468px] relative">
            <div
              style={{
                top: `${
                  30 +
                  appComponents?.findIndex(
                    (item) => activeComponent.title === item.title
                  ) *
                    65
                }px`,
              }}
              className={cx(
                "w-[4px] bg-white h-[148px] rounded-xl absolute left-0 right-0 translate-x-[-40%] transition-all"
              )}
            ></div>
          </div>
          {/** COMPONENT TITLES */}
          <div>
            {appComponents?.map((item) => (
              <div
                onClick={() => setActiveComponent(item)}
                key={item.title}
                className={cx(
                  "rounded-2xl transition-all duration-300 cursor-pointer",
                  activeComponent.title === item.title
                    ? "bg-white p-6 max-h-[200px]"
                    : "bg-transparent max-h-[65px] overflow-hidden hover:bg-[#746CF4] p-5"
                )}
              >
                <h3
                  className={cx(
                    "font-bold text-2xl mb-2",
                    activeComponent.title === item.title ? "" : " text-white"
                  )}
                >
                  {item.title}
                </h3>
                <p className="mb-1 text-sm text-content-disabled">
                  {item.description}
                </p>
                <InternalLink href={"#"} className="text-sm font-normal">
                  See in the Docs
                </InternalLink>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 max-lg:mb-5">
          <span className="text-sm text-white max-lg:text-base">
            And many more landing page sections.{" "}
            <InternalLink href="#" className="text-white">
              Discover now!
            </InternalLink>
          </span>
        </div>
      </div>
      <div className=" basis-[60%] min-h-[650px] max-lg:basis-[100%] max-lg:w-full max-lg:h-[600px] max-sm:pb-6">
        <div className="flex items-center justify-center w-full h-full max-lg:h-[600px]">
          <div
            id="canvas-showcase-wrapper"
            className="w-[90%] h-[90%]  rounded-2xl flex justify-center items-center bg-white relative overflow-hidden"
          >
            {activeComponent.title === "Prompt Input" && (
              <div
                className="flex w-full p-2 ml-3 mr-3 bg-white rounded-xl"
                style={{
                  boxShadow:
                    "0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)",
                }}
              >
                <PromptBoxShowcase />
              </div>
            )}
            {activeComponent.title === "Animated Tabs" && (
              <AnimatedTabs
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                options={options}
              />
            )}
            {activeComponent.title === "Stepper" && (
              <div className="w-[90%] flex flex-col gap-5 items-center">
                <div
                  style={{
                    boxShadow:
                      "0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)",
                  }}
                  className="w-full overflow-hidden rounded-xl"
                >
                  <Stepper activeStep={activeStep} stepOptions={stepOptions} />
                </div>
                <NSButton
                  onClick={() =>
                    setActiveStep(
                      (prev) =>
                        stepOptions[
                          (stepOptions?.findIndex(
                            (i) => i.value === activeStep.value
                          ) +
                            1) %
                            stepOptions?.length
                        ]
                    )
                  }
                  variant="brand"
                  size="lg"
                  className="max-[567px]:w-full"
                >
                  <NSButton.Prefix>
                    <NSIcon type="sparkle" />
                  </NSButton.Prefix>
                  Next Step
                </NSButton>
              </div>
            )}
            {activeComponent?.title === "Font Selector" && (
              <div className="w-[80%] flex items-center gap-10">
                <div
                  className=" basis-[300px]"
                  style={{
                    boxShadow:
                      "0px 43.636px 43.636px 0px rgba(115, 115, 115, 0.16)",
                  }}
                >
                  <FontSelector
                    font={selectedFont}
                    onFontSelect={(font: string) => {
                      changeSelectedFont(font);
                    }}
                  />
                </div>
                <div className="flex justify-center flex-grow">
                  <span
                    id="font-display"
                    className="text-4xl font-bold text-center"
                  >
                    Next Starter
                  </span>
                </div>
              </div>
            )}
            {activeComponent.tryMePlacement === "right" && (
              <>
                <div className="absolute max-sm:top-2 max-sm:ml-4 sm:top-[42%] sm:transform-y[-50%] sm:right-[-25px] flex flex-col">
                  <span className="relative z-10 block text-xl tracking-widest sm:-rotate-90 text-border-brand">
                    TRY ME
                  </span>

                  <Lottie
                    className="w-[200px] h-[200px] absolute top-0 left-0 right-0 max-sm:-translate-x-[32%] max-sm:-translate-y-[54%] sm:translate-x-[-18%] sm:translate-y-[-34%] z-0"
                    animationData={bluePulseLottie}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <div className="absolute max-sm:-rotate-90 max-sm:top-2 max-sm:left-[34%] sm:top-[55%] sm:translate-y-[-50%] sm:right-[7px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M10.5 5.25L10.5 18.75L3.75 12L10.5 5.25Z"
                      fill="#3E00FA"
                    />
                    <path
                      d="M9.96935 4.71927L3.21935 11.4693C3.14962 11.5389 3.0943 11.6216 3.05656 11.7127C3.01882 11.8037 2.99939 11.9013 2.99939 11.9999C2.99939 12.0985 3.01882 12.1961 3.05656 12.2871C3.0943 12.3782 3.14962 12.4609 3.21935 12.5305L9.96935 19.2805C10.0742 19.3855 10.2079 19.4571 10.3535 19.486C10.4991 19.515 10.65 19.5002 10.7871 19.4434C10.9242 19.3865 11.0414 19.2903 11.1238 19.1669C11.2062 19.0434 11.2501 18.8983 11.25 18.7499L11.25 12.7499L20.25 12.7499C20.4489 12.7499 20.6397 12.6709 20.7803 12.5302C20.921 12.3896 21 12.1988 21 11.9999C21 11.801 20.921 11.6102 20.7803 11.4696C20.6397 11.3289 20.4489 11.2499 20.25 11.2499L11.25 11.2499L11.25 5.2499C11.2501 5.10147 11.2062 4.95635 11.1238 4.83291C11.0414 4.70946 10.9242 4.61324 10.7871 4.55643C10.65 4.49962 10.4991 4.48476 10.3535 4.51375C10.2079 4.54274 10.0742 4.61426 9.96935 4.71927ZM9.74998 16.9396L4.81029 11.9999L9.74998 7.06021L9.74998 16.9396Z"
                      fill="#3E00FA"
                    />
                  </svg>
                </div>
              </>
            )}
            {activeComponent?.tryMePlacement === "bottom" && (
              <div className="absolute bottom-2 left-[50x%] flex items-center">
                <svg
                  className="relative z-10 rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M10.5 5.25L10.5 18.75L3.75 12L10.5 5.25Z"
                    fill="#3E00FA"
                  />
                  <path
                    d="M9.96935 4.71927L3.21935 11.4693C3.14962 11.5389 3.0943 11.6216 3.05656 11.7127C3.01882 11.8037 2.99939 11.9013 2.99939 11.9999C2.99939 12.0985 3.01882 12.1961 3.05656 12.2871C3.0943 12.3782 3.14962 12.4609 3.21935 12.5305L9.96935 19.2805C10.0742 19.3855 10.2079 19.4571 10.3535 19.486C10.4991 19.515 10.65 19.5002 10.7871 19.4434C10.9242 19.3865 11.0414 19.2903 11.1238 19.1669C11.2062 19.0434 11.2501 18.8983 11.25 18.7499L11.25 12.7499L20.25 12.7499C20.4489 12.7499 20.6397 12.6709 20.7803 12.5302C20.921 12.3896 21 12.1988 21 11.9999C21 11.801 20.921 11.6102 20.7803 11.4696C20.6397 11.3289 20.4489 11.2499 20.25 11.2499L11.25 11.2499L11.25 5.2499C11.2501 5.10147 11.2062 4.95635 11.1238 4.83291C11.0414 4.70946 10.9242 4.61324 10.7871 4.55643C10.65 4.49962 10.4991 4.48476 10.3535 4.51375C10.2079 4.54274 10.0742 4.61426 9.96935 4.71927ZM9.74998 16.9396L4.81029 11.9999L9.74998 7.06021L9.74998 16.9396Z"
                    fill="#3E00FA"
                  />
                </svg>
                <span className="relative z-10 block text-xl tracking-widest text-border-brand">
                  TRY ME
                </span>
                <Lottie
                  className="w-[200px] h-[200px] absolute top-0 left-0 right-0 translate-x-[-18%] translate-y-[-34%] z-0"
                  animationData={bluePulseLottie}
                  loop={true}
                  autoplay={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppComponentsShowcase;
