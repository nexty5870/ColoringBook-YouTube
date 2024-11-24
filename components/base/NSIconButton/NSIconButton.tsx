/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { IconButtonProps } from "./types";
import classnames from "classnames";
import { NSIcon } from "@/components/base";

const NSIconButton = ({
  type = "arrowRight",
  className = "",
  onClick,
  hasBorder = false,
}: IconButtonProps) => {
  return (
    <button
      className={classnames(
        { "ring-1 ring-border-disabled": hasBorder },
        "w-10 h-10 flex items-center justify-center rounded-xs text-content-primary bg-surface-primary hover:bg-surface-brand-subdued active:bg-surface-brand-hover active:text-border-brand",
        className
      )}
      onClick={onClick}
    >
      <NSIcon type={type} />
    </button>
  );
};

export default NSIconButton;
