/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { LogoutModalProps } from "./types";
import { Dialog } from "@headlessui/react";
import { NSButton, NSIcon } from "@/components/base";

const LogoutModal = ({ open, onClose, onLogoutClick }: LogoutModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-surface-overlay backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center w-screen">
        <Dialog.Panel className="max-w-[406px] mx-auto rounded-md shadow-popover bg-surface-primary p-s flex flex-col items-center gap-s">
          <div className="rounded-sm p-3xs ring-1 ring-border-disabled">
            <NSIcon type="question" className="text-content-error !w-6 !h-6" />
          </div>
          <span className="text-base font-medium text-content-primary">
            Are you sure you want to logout?
          </span>
          <div className="flex w-full gap-s">
            <NSButton
              className="flex-1"
              variant="brand"
              size="md"
              outlined
              onClick={onClose}
            >
              Cancel
            </NSButton>
            <NSButton
              className="flex-1"
              variant="danger"
              size="md"
              onClick={onLogoutClick}
            >
              Logout
            </NSButton>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LogoutModal;
