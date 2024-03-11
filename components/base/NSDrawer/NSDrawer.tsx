/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { Fragment, useState } from "react";
import classnames from "classnames";
import { NSDrawerProps } from "./types";
import { Transition, Dialog } from "@headlessui/react";
import { IconType, NSIcon, NSIconButton } from "@/components/base";

const NSDrawer = ({
  icon,
  title,
  trigger,
  className,
  children,
}: NSDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {trigger}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isOpen}
          className={classnames("relative z-10", className)}
          onClose={() => console.log("close")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/25"
              onClick={() => setIsOpen(false)}
            />
          </Transition.Child>

          <div className="fixed inset-0 ml-auto overflow-x-hidden max-w-fit">
            <div className="flex items-center justify-end min-h-full">
              <Dialog.Panel
                className="relative flex flex-col max-w-full max-h-screen min-h-screen bg-white py-s gap-s"
                onClick={(e: any) => {
                  if (
                    (e.target?.id as string)?.startsWith(
                      "headlessui-dialog-panel"
                    )
                  ) {
                    setIsOpen(false);
                  }
                }}
              >
                <div
                  className={classnames(
                    "flex gap-3xs items-center px-s max-w-full",
                    className
                  )}
                >
                  <div className="rounded-xs p-2 bg-surface-brand-subdued [&>*]:fill-content-primary">
                    {typeof icon === "string" ? (
                      <NSIcon type={icon as IconType} />
                    ) : (
                      icon
                    )}
                  </div>
                  <span className="text-lg font-medium">{title}</span>
                  <div className="flex-1" />
                  <NSIconButton
                    type="close"
                    onClick={() => setIsOpen(false)}
                    hasBorder
                  />
                </div>
                <div className="flex-1 overflow-y-auto grow pl-s pr-2xs">
                  {children}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NSDrawer;
