/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef } from "react";
import { NSTabProps } from "./types";
import classnames from "classnames";
import "./NSTab.scss";

const NSTab = ({
  orientation = "horizontal",
  className = "",
  disabled = false,
  options = [],
  value,
  onChange,
}: NSTabProps) => {
  const selectorRef = useRef(null);
  const tabsRef = useRef(null);
  const normalizedOptions =
    typeof options[0] === "object" ? options.map((o: any) => o.id) : options;

  const updateSelector = () => {
    const tabs = tabsRef.current?.querySelectorAll("button");
    const activeItem = tabs[normalizedOptions.indexOf(value)];
    if (!activeItem) return;
    const itemPos = activeItem.getBoundingClientRect();

    if (orientation === "horizontal") {
      selectorRef.current.style.left = `${
        itemPos.left -
        selectorRef.current.parentElement.getBoundingClientRect().left
      }px`;
      selectorRef.current.style.width = `calc((100% - ${
        8 * (options.length - 1)
      }px) / ${options.length})`;
    } else {
      selectorRef.current.style.left = "4px";
      selectorRef.current.style.width = "calc(100% - 8px)";
      selectorRef.current.style.top = `${
        itemPos.top -
        selectorRef.current.parentElement.getBoundingClientRect().top
      }px`;
      selectorRef.current.style.height = `24px`;
    }
  };
  useEffect(() => {
    updateSelector();
  }, [value]);

  useEffect(() => {
    function handleResize() {
      updateSelector();
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav
      className={classnames(
        "w-full tabs flex gap-4xs",
        {
          "flex-col": orientation === "vertical",
          "!cursor-not-allowed": disabled,
        },
        className
      )}
      ref={tabsRef}
    >
      <div
        className={classnames("selector", {
          "!bg-content-disabled !cursor-not-allowed": disabled,
        })}
        style={{
          height: orientation === "horizontal" ? `calc(100% - 8px)` : "24px",
          width:
            orientation === "vertical"
              ? `calc((100% - ${8 * (options.length - 1)}px) / ${
                  options.length
                })`
              : "100%",
        }}
        ref={selectorRef}
      ></div>
      {options.map((option) => (
        <button
          key={typeof option === "object" ? option.id : option}
          className={classnames(
            value === (typeof option === "object" ? option.id : option)
              ? "active"
              : disabled
              ? "!text-content-disabled"
              : "hover:bg-surface-brand-hover",
            "rounded-2xs cursor-pointer flex items-center gap-4xs justify-center",
            { "!cursor-not-allowed": disabled }
          )}
          style={{
            width:
              orientation === "horizontal"
                ? `calc((100% - ${4 * (options.length - 1)}px) / ${
                    options.length
                  })`
                : "100%",
          }}
          onClick={() =>
            onChange(typeof option === "object" ? option.id : option)
          }
          disabled={disabled}
        >
          {typeof option === "object" ? option.label : option}
        </button>
      ))}
    </nav>
  );
};

export default NSTab;
