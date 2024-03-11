"use client";
import React, { FC, useLayoutEffect } from "react";
import classnames from "classnames";

export interface Option {
  label: string;
  value: string;
}

interface AnimatedTabsProps {
  options: Option[];
  selectedOption: Option;
  setSelectedOption: React.Dispatch<React.SetStateAction<Option>>;
  containerClassName?: string;
  subContainerClassName?: string;
}

const AnimatedTabs: FC<AnimatedTabsProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  containerClassName,
  subContainerClassName,
}) => {
  const activeRef = React.createRef<HTMLDivElement>();
  const none = React.createRef<HTMLDivElement>();
  const containerRef = React.createRef<HTMLDivElement>();
  const [offset, setOffset] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);

  const handleChange = () => {
    const activeElement = activeRef.current;
    setOffset(activeElement.offsetLeft);
    setWidth(activeElement.clientWidth);
  };

  useLayoutEffect(() => {
    handleChange();
  }, [selectedOption, activeRef]);

  useLayoutEffect(() => {
    const cont = containerRef.current;
    setContainerWidth(cont.clientWidth);
  }, [containerRef]);

  return (
    <>
      <style>
        {`
        .animated-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .animated-tabs-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}
      </style>
      <div
        className={classnames(
          "flex justify-center items-center m-10 relative max-lg:mx-0 max-sm:mx-0 max-sm:block max-sm:w-[98vw] max-sm:ml-auto max-sm:mr-auto max-sm:overflow-scroll animated-tabs-container",
          containerClassName
        )}
      >
        <div
          ref={containerRef}
          className={classnames(
            "relative flex p-2 bg-[#F8FAFC] backdrop-blur rounded-2xl gap-[20px] max-sm:gap-[5px] max-sm:w-[550px]",
            subContainerClassName
          )}
        >
          <div
            className="absolute transition-all top-2 bottom-2 bg-border-brand rounded-2xl"
            style={{ left: offset, right: containerWidth - (offset + width) }}
          ></div>
          {options.map((option) => (
            <div
              key={option.value}
              ref={selectedOption?.value === option.value ? activeRef : none}
              onClick={() => {
                setSelectedOption(option);
              }}
              className="z-10 p-2 px-5 text-sm font-medium cursor-pointer"
            >
              <span
                className={classnames(
                  selectedOption?.value === option.value
                    ? "text-white"
                    : "text-black",
                  "transition-all",
                  "text-center"
                )}
              >
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimatedTabs;
