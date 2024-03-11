import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const SvgComparision = () => {
  return (
    <section className="mx-8 mb-[96px] flex justify-center items-center">
      <div className="w-[75%] flex justify-center items-center max-[1280px]:flex-col">
        <div className="basis-[40%] p-5 border-[3px] border-border-brand rounded-2xl">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                className="h-[560px] w-[560px]"
                src="/assets/svg-comparision/svg-old.png"
                alt="Before processing to SVG"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                className="h-[560px] w-[560px]"
                src="/assets/svg-comparision/svg-new.png"
                alt="After processing to SVG"
              />
            }
          />
        </div>

        <div className=" basis-[60%] pl-12 max-[1280px]:mt-10 max-sm:pl-0 max-sm:text-center max-sm:flex max-sm:items-center max-sm:flex-col">
          <div className="px-3 py-2 bg-violet-700 bg-opacity-5 rounded-[200px] border border-surface-brand justify-start items-end gap-2 flex mb-6 w-[140px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M18 4.375V13.9109L14.8969 10.8078C14.7797 10.6907 14.6208 10.6249 14.4551 10.6249C14.2894 10.6249 14.1305 10.6907 14.0133 10.8078L12.0086 12.8125L8.12969 8.93281C8.07164 8.8747 8.00271 8.8286 7.92684 8.79715C7.85096 8.7657 7.76963 8.74951 7.6875 8.74951C7.60537 8.74951 7.52404 8.7657 7.44816 8.79715C7.37229 8.8286 7.30336 8.8747 7.24531 8.93281L3 13.1789V4.375C3 4.20924 3.06585 4.05027 3.18306 3.93306C3.30027 3.81585 3.45924 3.75 3.625 3.75H17.375C17.5408 3.75 17.6997 3.81585 17.8169 3.93306C17.9342 4.05027 18 4.20924 18 4.375Z"
                fill="#3E00FA"
              />
              <path
                d="M17.375 3.125H3.625C3.29348 3.125 2.97554 3.2567 2.74112 3.49112C2.5067 3.72554 2.375 4.04348 2.375 4.375V15.625C2.375 15.9565 2.5067 16.2745 2.74112 16.5089C2.97554 16.7433 3.29348 16.875 3.625 16.875H17.375C17.7065 16.875 18.0245 16.7433 18.2589 16.5089C18.4933 16.2745 18.625 15.9565 18.625 15.625V4.375C18.625 4.04348 18.4933 3.72554 18.2589 3.49112C18.0245 3.2567 17.7065 3.125 17.375 3.125ZM17.375 4.375V12.4023L15.3383 10.3664C15.2222 10.2503 15.0844 10.1582 14.9327 10.0954C14.781 10.0325 14.6185 10.0002 14.4543 10.0002C14.2901 10.0002 14.1276 10.0325 13.9759 10.0954C13.8242 10.1582 13.6864 10.2503 13.5703 10.3664L12.0078 11.9289L8.57031 8.49141C8.33592 8.25716 8.0181 8.12558 7.68672 8.12558C7.35534 8.12558 7.03752 8.25716 6.80312 8.49141L3.625 11.6695V4.375H17.375ZM3.625 13.4375L7.6875 9.375L13.9375 15.625H3.625V13.4375ZM17.375 15.625H15.7055L12.893 12.8125L14.4555 11.25L17.375 14.1703V15.625ZM11.75 7.8125C11.75 7.62708 11.805 7.44582 11.908 7.29165C12.011 7.13748 12.1574 7.01732 12.3287 6.94636C12.5 6.87541 12.6885 6.85684 12.8704 6.89301C13.0523 6.92919 13.2193 7.01848 13.3504 7.14959C13.4815 7.2807 13.5708 7.44775 13.607 7.6296C13.6432 7.81146 13.6246 7.99996 13.5536 8.17127C13.4827 8.34257 13.3625 8.48899 13.2083 8.592C13.0542 8.69502 12.8729 8.75 12.6875 8.75C12.4389 8.75 12.2004 8.65123 12.0246 8.47541C11.8488 8.2996 11.75 8.06114 11.75 7.8125Z"
                fill="#3E00FA"
              />
            </svg>

            <div className="text-content-brand font-semibold leading-[18.20px] text-sm">
              High Quality
            </div>
          </div>
          <h2 className=" text-[#1F2937] text-[40px] font-black max-sm:text-[28px]">
            Don&apos;t settle for anything less than high-definition quality SVG
            designs with Sketch Logo AI!
          </h2>
          <p className="text-[#1F2937] text-sm mt-8">
            Experience seamless, distortion-free upscaling of your images. Say
            goodbye to distorted details in upscaled images – now, upscale
            freely with zero loss in quality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SvgComparision;
