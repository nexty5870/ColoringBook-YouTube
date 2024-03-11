/* eslint-disable @next/next/no-img-element */
"use client";

import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import { SelectListProps } from "./types";

const SLSelectList = ({
  value,
  options,
  disabled,
  onChange,
}: SelectListProps) => {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      {({ disabled }) => (
        <Listbox.Options
          static
          className={`${
            disabled && "opacity-50 cursor-not-allowed"
          } flex flex-col gap-1 p-1 bg-[#EBF0F380] rounded-lg`}
        >
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option.id} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "bg-[#020617] text-white" : "text-[#020617]"
                  } ${
                    disabled && "cursor-not-allowed"
                  } rounded text-[10px] font-medium px-0.5 py-1`}
                >
                  {option.label}
                </button>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      )}
    </Listbox>
  );
};

export default SLSelectList;
