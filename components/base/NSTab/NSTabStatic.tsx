/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { NSTabProps } from "./types";
import classnames from "classnames";

const NSTabStatic = ({
  orientation = "horizontal",
  className = "",
  disabled = false,
  options = [],
  value,
  onChange,
}: NSTabProps) => {
  return (
    <div
      className={classnames(
        {
          "flex-col": orientation === "vertical",
          "!cursor-not-allowed": disabled,
        },
        "rounded-xs bg-surface-brand-subdued p-4xs w-full flex gap-4xs"
      )}
    >
      {options.map((option) => (
        <button
          key={typeof option === "object" ? option.id : option}
          onClick={() =>
            onChange(typeof option === "object" ? option.id : option)
          }
          className={classnames(
            value === (typeof option === "object" ? option.id : option)
              ? disabled
                ? "!bg-content-disabled text-content-invert [&>*]:fill-content-invert"
                : "text-content-invert [&>*]:fill-content-invert bg-surface-brand"
              : disabled
              ? "opacity-70 [&>*]:fill-content-primary"
              : "text-content-primary [&>*]:fill-content-primary hover:bg-surface-brand-hover",
            { "!cursor-not-allowed": disabled },
            "flex items-center justify-center flex-1 font-bold text-2xs px-4xs min-h-6 max-h-6 rounded-2xs gap-4xs"
          )}
          disabled={disabled}
        >
          {typeof option === "object" ? option.label : option}
        </button>
      ))}
    </div>
  );
};

export default NSTabStatic;
