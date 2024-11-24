/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { NSSwitchProps } from "./types";
import classnames from "classnames";
import { Switch } from "@headlessui/react";
import { NSIcon } from "@/components/base";

const NSSwitch = ({
  size = "sm",
  className = "",
  label,
  disabled = false,
  checked,
  onChange,
}: NSSwitchProps) => {
  const sizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-[20px] w-9";
      case "lg":
        return "h-[32px] w-[52px]";
    }
  };
  const sizeClassesChild = () => {
    switch (size) {
      case "sm":
        return "h-[14px] w-[14px]";
      case "lg":
        return "h-6 w-6";
    }
  };
  return (
    <div
      className={classnames(
        "flex items-center gap-3xs",
        {
          "text-content-secondary": disabled,
        },
        className
      )}
    >
      {label?.length && size === "sm" && (
        <span className="text-xs font-medium">{label}</span>
      )}
      {label?.length && size === "lg" && (
        <span className="text-sm">{label}</span>
      )}
      <Switch
        checked={checked}
        onChange={onChange}
        className={classnames(
          sizeClasses(),
          checked
            ? "bg-surface-brand"
            : "bg-surface-disabled ring-1 ring-border-disabled",
          "group relative inline-flex items-center rounded-full active:opacity-80 disabled:opacity-100 disabled:bg-surface-disabled disabled:cursor-not-allowed"
        )}
        disabled={disabled}
      >
        <span
          className={classnames(
            sizeClassesChild(),
            checked
              ? size === "sm"
                ? "translate-x-[19px] bg-white"
                : "translate-x-[24px] bg-white"
              : size === "sm"
              ? "translate-x-[3px] bg-surface-invert-secondary"
              : "translate-x-1 bg-surface-invert-secondary",
            "inline-block transform rounded-full bg-white transition group-disabled:bg-surface-primary group-active:ring-surface-press group-active:ring-[9px] group-disabled:ring-0"
          )}
        >
          {size === "lg" &&
            (checked ? (
              <NSIcon
                type="check"
                className="!w-full !h-full p-1 text-content-brand group-disabled:text-border-disabled"
              />
            ) : (
              <NSIcon
                type="close"
                className="!w-full !h-full p-1 text-content-invert group-disabled:text-border-disabled"
              />
            ))}
        </span>
      </Switch>
    </div>
  );
};

export default NSSwitch;
