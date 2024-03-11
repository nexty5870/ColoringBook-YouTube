import React from "react";
import NegativePromptButton from "./NegativePromptButton";
import Prompt from "./Prompt";
import { NSButton, NSIcon } from "@/components/base";
import classnames from "classnames";

type PromptInputProps = {
  negativePrompt: string;
  setNegativePrompt: (value: string) => void;
  prompt: string;
  setPrompts: (value: { text: string; importance: number }[]) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const PromptInput = ({
  negativePrompt,
  setNegativePrompt,
  prompt,
  setPrompts,
  onClick,
  className,
}: PromptInputProps) => {
  return (
    <div
      className={classnames(
        "flex items-end gap-3 p-2 bg-white rounded-2xl",
        className
      )}
    >
      <div className="max-[1439px]:hidden">
        <NegativePromptButton
          negativePrompt={negativePrompt}
          onNegativePrompt={(value: string) => setNegativePrompt(value)}
        />
      </div>
      <div className="self-center flex-1 w-full pl-2 pr-3">
        <Prompt prompt={prompt} setPrompt={(value) => setPrompts(value)} />
      </div>
      <NSButton
        variant="brand"
        size="lg"
        className="max-[567px]:w-full"
        onClick={onClick}
      >
        <NSButton.Prefix>
          <NSIcon type="sparkle" />
        </NSButton.Prefix>
        Generate
      </NSButton>
    </div>
  );
};

export default PromptInput;
