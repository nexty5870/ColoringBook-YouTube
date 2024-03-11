/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { NSDrawer, NSIcon, NSIconButton, IconType } from "@/components/base";

const specialKeys = ["backspace", "keyReturn"];

const shortcuts: {
  name: string;
  hold?: "cmd" | "shift";
  key: string | (typeof specialKeys)[number];
}[] = [
  {
    name: "Undo",
    hold: "cmd",
    key: "Z",
  },
  {
    name: "Redo",
    hold: "cmd",
    key: "Y",
  },
  {
    name: "Bring forward",
    hold: "cmd",
    key: "]",
  },
  {
    name: "Send backward",
    hold: "cmd",
    key: "[",
  },
  {
    name: "Bring to front",
    key: "]",
  },
  {
    name: "Send to back",
    key: "[",
  },
  {
    name: "Deselect",
    key: "ESC",
  },
  {
    name: "Remove",
    key: "backspace",
  },
  {
    name: "Show/Hide Grid",
    hold: "shift",
    key: "G",
  },
  {
    name: "Move",
    key: "V",
  },
  {
    name: "Sketch",
    key: "S",
  },
  {
    name: "Line",
    key: "L",
  },
  {
    name: "Shapes",
    key: "O",
  },
  {
    name: "Icons",
    key: "I",
  },
  {
    name: "Brands",
    key: "B",
  },
  {
    name: "Upload Image",
    hold: "shift",
    key: "K",
  },
  {
    name: "Eraser",
    key: "E",
  },
  {
    name: "Fullscreen / Minimized",
    hold: "cmd",
    key: "keyReturn",
  },
  {
    name: "Download",
    hold: "shift",
    key: "S",
  },
  {
    name: "Clear Everything",
    hold: "cmd",
    key: "backspace",
  },
];

const KeyboardDrawer = () => {
  const isMac = window.navigator.platform.includes("Mac");
  return (
    <NSDrawer
      className="w-[400px] bg-surface-primary"
      icon="keyboard"
      title="Keyboard Commands"
      trigger={<NSIconButton type="keyboard" className="max-[1072px]:hidden" />}
    >
      <div className="flex flex-col divide-y divide-border-disabled">
        {shortcuts.map(({ name, hold, key }) => (
          <div
            key={name}
            className="flex items-center justify-between hover:bg-surface-brand-subdued py-3xs"
          >
            <span className="text-xs font-medium text-content-primary">
              {name}
            </span>
            <div className="flex text-xs font-medium gap-4xs">
              {hold && (
                <span className="py-4xs px-3xs rounded-2xs bg-surface-secondary">
                  {hold === "shift" ? (
                    <NSIcon type="arrowFatUp" className="!w-4 !h-4" />
                  ) : isMac ? (
                    <NSIcon type="command" className="!w-4 !h-4" />
                  ) : (
                    "CTRL"
                  )}
                </span>
              )}
              <span className="py-4xs px-3xs rounded-2xs bg-surface-secondary">
                {specialKeys.includes(key) ? (
                  <NSIcon type={key as IconType} className="!w-4 !h-4" />
                ) : (
                  key
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </NSDrawer>
  );
};

export default KeyboardDrawer;
