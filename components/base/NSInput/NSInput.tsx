/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import classnames from "classnames";
import { InputProps } from "./types";

const NSInput = ({
  value,
  placeholder,
  disabled = false,
  className = "",
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <input
      value={value}
      className={classnames(
        "text-content-primary text-xs font-medium bg-surface-primary ring-border-disabled rounded-xs placeholder:text-content-disabled ring-1 w-full h-9 px-3xs focus:ring-2 focus:ring-border-brand-alt !outline-none",
        className
      )}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default NSInput;
