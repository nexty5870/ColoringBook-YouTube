"use client";
import React, { useRef } from "react";
import sketchLogoAiHorizontalSvg from "@/public/assets/sketch-logo-ai-h.svg";
import Image from "next/image";

const SampleAppShowcase = () => {
  const sampleAppSSContainerRef = useRef<HTMLDivElement>();

  const scrollToPosition = ({
    duration,
    toEnd,
  }: {
    duration: number;
    toEnd: boolean;
  }) => {
    const scrollingDiv = sampleAppSSContainerRef?.current;
    const targetPosition = toEnd
      ? scrollingDiv.scrollHeight - scrollingDiv.clientHeight
      : 0;

    const startPosition = scrollingDiv.scrollTop;
    const startTime = performance.now();

    function animateScroll(currentTime: number) {
      const elapsedTime = currentTime - startTime;

      scrollingDiv.scrollTop = Math.floor(
        easeInOutQuad(elapsedTime / duration) *
          (targetPosition - startPosition) +
          startPosition
      );

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const handleMouseEnter = () => {
    scrollToPosition({ duration: 2500, toEnd: true });
  };

  const handleMouseLeave = () => {
    scrollToPosition({ duration: 2500, toEnd: false });
  };

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center px-md rounded-2xl max-lg:mx-lg  w-full mb-12"
    >
      <div className="flex items-center justify-around rounded-lg py-sm w-[1280px] max-sm:p-8 max-sm:flex-col bg-base-100 border-opacity-5 border-black">
        <div className="flex flex-col justify-start items-start">
          <Image
            src={sketchLogoAiHorizontalSvg}
            height={48}
            width={247}
            alt="Sketch Logo AI Logo"
            style={{ width: "247px" }}
          />
          <p className=" font-semibold text-xl tracking-widest mt-4 mb-5 max-sm:mb-8">
            Made by Next Starter AI
          </p>
          <a
            href="https://sketchlogo.ai"
            target="_blank"
            rel="follow"
            className="max-sm:hidden"
          >
            <div className="flex items-center gap-1 p-3 border-border-brand border-[2px] rounded-xl hover:bg-surface-brand-hover">
              <span className="text-border-brand font-medium">Visit Site</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.3172 10.4423L11.6922 16.0673C11.5749 16.1846 11.4159 16.2505 11.25 16.2505C11.0841 16.2505 10.9251 16.1846 10.8078 16.0673C10.6905 15.95 10.6247 15.791 10.6247 15.6251C10.6247 15.4593 10.6905 15.3002 10.8078 15.1829L15.3664 10.6251H3.125C2.95924 10.6251 2.80027 10.5593 2.68306 10.442C2.56585 10.3248 2.5 10.1659 2.5 10.0001C2.5 9.83434 2.56585 9.67537 2.68306 9.55816C2.80027 9.44095 2.95924 9.3751 3.125 9.3751H15.3664L10.8078 4.81729C10.6905 4.70002 10.6247 4.54096 10.6247 4.3751C10.6247 4.20925 10.6905 4.05019 10.8078 3.93292C10.9251 3.81564 11.0841 3.74976 11.25 3.74976C11.4159 3.74976 11.5749 3.81564 11.6922 3.93292L17.3172 9.55792C17.3753 9.61596 17.4214 9.68489 17.4529 9.76077C17.4843 9.83664 17.5005 9.91797 17.5005 10.0001C17.5005 10.0822 17.4843 10.1636 17.4529 10.2394C17.4214 10.3153 17.3753 10.3842 17.3172 10.4423Z"
                  fill="#3E00FA"
                />
              </svg>
            </div>
          </a>
        </div>
        {/** ARROW SVG */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="max-lg:w-[200px] w-[240px] max-sm:hidden"
            width="284"
            height="60"
            viewBox="0 0 284 60"
            fill="none"
          >
            <path
              d="M2 7.66096C17.9797 20.5228 30.6013 25.9673 51.1018 25.0531C69.6149 24.2276 89.753 15.4059 106.971 8.97752C128.289 1.0186 170.136 -5.20174 182.523 20.1334C192.142 39.8055 177.725 63.3294 155.037 56.9272C146.291 54.459 141.771 42.7433 145.645 34.6153C149.83 25.8365 162.339 21.6044 170.99 19.5791C194.224 14.1397 209.703 35.9768 230.727 39.8122C250.369 43.3954 264.955 34.5673 279.829 22.628C281.103 21.6053 280.451 28.4096 280.451 30.1114C280.451 36.3501 281.694 33.5812 281.694 28.8642C281.694 25.8304 283.286 19.3803 279.208 21.1035C276.265 22.3467 270.079 22.628 266.777 22.628"
              stroke="#3E00FA"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div>
          <div
            ref={sampleAppSSContainerRef}
            className="no-scrollbar h-[300px] w-[300px] max-lg:w-[200px] max-sm:w-[100%] overflow-scroll"
          >
            <img src="/assets/sample-app-showcase/sketch-logo-landing.png" />
          </div>
        </div>
        <a
          href="https://sketchlogo.ai"
          target="_blank"
          rel="follow"
          className="max-sm:block hidden mt-8 w-full"
        >
          <div className="flex items-center justify-center gap-1 p-3 border-border-brand border-[2px] rounded-xl w-full hover:bg-surface-brand-hover">
            <span className="text-border-brand font-medium">Visit Site</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.3172 10.4423L11.6922 16.0673C11.5749 16.1846 11.4159 16.2505 11.25 16.2505C11.0841 16.2505 10.9251 16.1846 10.8078 16.0673C10.6905 15.95 10.6247 15.791 10.6247 15.6251C10.6247 15.4593 10.6905 15.3002 10.8078 15.1829L15.3664 10.6251H3.125C2.95924 10.6251 2.80027 10.5593 2.68306 10.442C2.56585 10.3248 2.5 10.1659 2.5 10.0001C2.5 9.83434 2.56585 9.67537 2.68306 9.55816C2.80027 9.44095 2.95924 9.3751 3.125 9.3751H15.3664L10.8078 4.81729C10.6905 4.70002 10.6247 4.54096 10.6247 4.3751C10.6247 4.20925 10.6905 4.05019 10.8078 3.93292C10.9251 3.81564 11.0841 3.74976 11.25 3.74976C11.4159 3.74976 11.5749 3.81564 11.6922 3.93292L17.3172 9.55792C17.3753 9.61596 17.4214 9.68489 17.4529 9.76077C17.4843 9.83664 17.5005 9.91797 17.5005 10.0001C17.5005 10.0822 17.4843 10.1636 17.4529 10.2394C17.4214 10.3153 17.3753 10.3842 17.3172 10.4423Z"
                fill="#3E00FA"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SampleAppShowcase;
