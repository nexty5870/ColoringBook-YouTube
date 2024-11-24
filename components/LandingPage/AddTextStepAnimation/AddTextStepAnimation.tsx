import AddFontAnimationLottie from "./AddFontAnimationLotties";
import React, { FC } from "react";

interface AddTextStepAnimationProps {
  heading?: string;
  description?: string;
  topIndicatorText?: string;
}

const AddTextStepAnimation: FC<AddTextStepAnimationProps> = ({
  heading = "Create Striking Logos with Unique Fonts!",
  description = `Take our second step and turn words into art. Try out a variety of
  fonts to design logos that accurately convey the spirit of your
  brand’s identity. Transform ordinary words into remarkable brand
  expressions.`,
  topIndicatorText = "Logotype",
}) => {
  return (
    <section
      className="mx-10 my-10 flex  min-h-[600px] max-sm:min-h-[500px] rounded-2xl mb-[96px] max-sm:flex-col"
      style={{
        background: "linear-gradient(135deg, #3E00FA 0%, #6FA0FF 100%)",
      }}
    >
      <div className="basis-[40%] pl-16 mt-auto mb-auto max-sm:p-3 max-sm:flex max-sm:flex-col max-sm:items-center">
        <div className="px-3 py-2 bg-white rounded-[200px] border border-surface-brand gap-2 pr-4 flex mb-2 w-[120px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M15.625 4.375V15C15.625 15.1658 15.5592 15.3247 15.4419 15.4419C15.3247 15.5592 15.1658 15.625 15 15.625H5C4.83424 15.625 4.67527 15.5592 4.55806 15.4419C4.44085 15.3247 4.375 15.1658 4.375 15V4.375H15.625Z"
              fill="#3E00FA"
            />
            <path
              d="M16.25 4.375V6.875C16.25 7.04076 16.1842 7.19973 16.0669 7.31694C15.9497 7.43415 15.7908 7.5 15.625 7.5C15.4592 7.5 15.3003 7.43415 15.1831 7.31694C15.0658 7.19973 15 7.04076 15 6.875V5H10.625V15H12.5C12.6658 15 12.8247 15.0658 12.9419 15.1831C13.0592 15.3003 13.125 15.4592 13.125 15.625C13.125 15.7908 13.0592 15.9497 12.9419 16.0669C12.8247 16.1842 12.6658 16.25 12.5 16.25H7.5C7.33424 16.25 7.17527 16.1842 7.05806 16.0669C6.94085 15.9497 6.875 15.7908 6.875 15.625C6.875 15.4592 6.94085 15.3003 7.05806 15.1831C7.17527 15.0658 7.33424 15 7.5 15H9.375V5H5V6.875C5 7.04076 4.93415 7.19973 4.81694 7.31694C4.69973 7.43415 4.54076 7.5 4.375 7.5C4.20924 7.5 4.05027 7.43415 3.93306 7.31694C3.81585 7.19973 3.75 7.04076 3.75 6.875V4.375C3.75 4.20924 3.81585 4.05027 3.93306 3.93306C4.05027 3.81585 4.20924 3.75 4.375 3.75H15.625C15.7908 3.75 15.9497 3.81585 16.0669 3.93306C16.1842 4.05027 16.25 4.20924 16.25 4.375Z"
              fill="#3E00FA"
            />
          </svg>

          <span className=" text-border-brand font-semibold leading-[18.20px] text-sm">
            {topIndicatorText}
          </span>
        </div>
        <h3 className=" text-white text-4xl max-sm:text-2xl font-black leading-[56px] max-sm:text-center">
          {heading}
        </h3>
        <p className="text-sm text-white mt-9 max-sm:text-center max-sm:mt-4">
          {description}
        </p>
      </div>
      <div className=" basis-[60%] max-sm:pb-6">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[90%] h-[90%]  rounded-2xl flex justify-center items-center bg-[#F2F5F9]">
            <AddFontAnimationLottie className="w-[100%] h-[100%] max-sm:w-[90%] max-sm:h-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTextStepAnimation;
