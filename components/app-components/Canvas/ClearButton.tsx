/* eslint-disable @next/next/no-img-element */
"use client";

import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { usePopper } from "react-popper";
import { NSButton } from "../../base/NSButton";
import { NSIcon } from "../../base/NSIcon";
import classnames from "classnames";

const ClearButton = ({ onClear }: { onClear: () => void }) => {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-start",
    strategy: "fixed",
  });

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            ref={setReferenceElement as any}
            className={classnames(
              "p-2.5 hover:bg-surface-brand-hover rounded-r-xl focus:outline-none",
              { "bg-surface-brand-hover [&>*]:fill-border-brand": open }
            )}
          >
            <NSIcon type="broom" />
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
              className="absolute z-10 flex mb-2"
            >
              <div className="flex flex-col gap-2xs p-2xs bg-surface-primary overflow-hidden rounded-sm shadow-popover ring-1 ring-border-disabled max-w-[196px] min-w-[196px]">
                <span className="text-xs font-medium text-content-primary">
                  Are you sure you want to clear everything?
                </span>
                <div className="flex gap-2xs">
                  <NSButton
                    variant="brand"
                    size="sm"
                    className="flex-1"
                    outlined
                    onClick={() => close()}
                  >
                    Cancel
                  </NSButton>
                  <NSButton
                    variant="brand"
                    size="sm"
                    className="flex-1"
                    onClick={() => (onClear(), close())}
                  >
                    Clear
                  </NSButton>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ClearButton;
