/* eslint-disable no-unused-vars */
import classnames from "classnames";
import { Popover, Transition } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import { usePopper } from "react-popper";
import { ColorPickerProps } from "./types";
import { solidColors } from "@/app/utils/solid-colors";
import { NSIcon } from "@/components/base";

const ColorPicker: FC<ColorPickerProps> = ({
  color,
  onColorChange,
  placement = "right-start",
  allowEmpty = true,
}) => {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement ?? "right-start",
    strategy: "fixed",
  });

  let bgColor = solidColors.find((c) => c.name === color)?.hex;
  let selectedColor = color;

  return (
    <Popover className="relative self-center">
      {({ close }) => (
        <>
          <Popover.Button
            ref={setReferenceElement as any}
            className="p-1.5 ring-1 ring-border-disabled rounded-xs bg-surface-disabled hover:bg-surface-brand-subdued active:bg-surface-brand-hover"
            style={
              color
                ? {
                    backgroundColor: bgColor,
                    color: "white",
                  }
                : {}
            }
          >
            <NSIcon
              type="eyedropper"
              className="cursor-pointer bg-blend-difference"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              ref={setPopperElement as any}
              style={styles.popper}
              {...attributes.popper}
              className={classnames(
                { "flex-row-reverse": placement.startsWith("left") },
                "absolute z-10 flex ml-2"
              )}
            >
              <div className="overflow-hidden rounded-sm shadow-popover ring-1 ring-border-disabled max-w-[216px] min-w-[216px]">
                <div className="relative grid grid-cols-2 gap-2 p-2xs bg-surface-primary max-h-[336px] overflow-y-scroll">
                  {solidColors.map((color) => (
                    <button
                      key={color.name}
                      className={`${
                        color.name.length
                          ? "hover:opacity-90"
                          : "border border-black hover:!bg-surface-brand-subdued"
                      } ${
                        color.name === selectedColor
                          ? "border-2 border-border-invert"
                          : ""
                      }
                        rounded-xs text-2xs h-8 font-bold w-full disabled:cursor-not-allowed px-3xs py-4xs truncate text-ellipsis`}
                      style={{
                        backgroundColor: color.hex,
                      }}
                      onClick={() => {
                        onColorChange(color.name);
                        close();
                      }}
                      disabled={!allowEmpty && !color.name}
                    >
                      <span className="text-white mix-blend-difference">
                        {color.name.length ? color.name : "Not Specified"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ColorPicker;
