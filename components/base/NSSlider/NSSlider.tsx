/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { FC } from "react";
import ReactSlider from "react-slider";
import st from "./styles.module.scss";
import { Tooltip } from "react-tooltip";
import { NSSliderProps } from "./types";

const NSSlider: FC<NSSliderProps> = ({
  onChange,
  value,
  renderInput = false,
  min,
  max,
}) => {
  return (
    <div className="flex items-center flex-1 gap-3xs">
      <div className="flex-1">
        <ReactSlider
          className={st.horizontalSlider}
          thumbClassName={st.exampleThumb}
          trackClassName={st.exampleTrack}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          onChange={onChange}
          value={value}
          min={min}
          max={max}
          renderThumb={(props, state) => {
            const { key, ...restProps } = props;
            return (
              <div
                {...restProps}
                data-tooltip-id="slider-tooltip"
                data-tooltip-content={`${state.valueNow}`}
                style={{
                  ...props.style,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  outline: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.28585 1.42852C3.28585 1.03403 3.60565 0.714233 4.00014 0.714233C4.39463 0.714233 4.71443 1.03403 4.71443 1.42852V8.57138C4.71443 8.96587 4.39463 9.28566 4.00014 9.28566C3.60565 9.28566 3.28585 8.96587 3.28585 8.57138V1.42852ZM0.428711 2.85709C0.428711 2.4626 0.748508 2.1428 1.143 2.1428C1.53749 2.1428 1.85728 2.4626 1.85728 2.85709V7.14281C1.85728 7.53729 1.53749 7.85709 1.143 7.85709C0.748508 7.85709 0.428711 7.53729 0.428711 7.1428V2.85709ZM7.57157 2.85709C7.57157 2.4626 7.25177 2.1428 6.85728 2.1428C6.46279 2.1428 6.143 2.4626 6.143 2.85709V7.1428C6.143 7.53729 6.46279 7.85709 6.85728 7.85709C7.25177 7.85709 7.57157 7.53729 7.57157 7.1428V2.85709Z"
                    fill="#F9F6FE"
                  />
                </svg>
              </div>
            );
          }}
          renderTrack={(props, state) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                style={{
                  ...props.style,
                  borderRadius: "500px",
                  background:
                    state.index === 2
                      ? "#f00"
                      : state.index === 1
                      ? "#F1F5F9"
                      : "#3E00FA",
                }}
              />
            );
          }}
          pearling
          minDistance={10}
        />
        <Tooltip
          id="slider-tooltip"
          style={{ padding: "4px 8px", fontSize: "12px", zIndex: 1 }}
        />
      </div>
      {renderInput && (
        <div className="min-w-[36px] h-8 border border-border-disabled bg-surface-primary rounded-xs flex items-center justify-center text-sm font-medium">
          {value}
        </div>
      )}
    </div>
  );
};

export default NSSlider;
