"use client";
import { useState } from "react";
import PromptInput from "./PromptInput";

export const PromptInputDemo = () => {
  const [prompt] = useState();
  const [prompts, setPrompts] = useState([]);
  const [negativePrompt, setNegativePrompt] = useState("");
  return (
    <div className="w-full px-4 mx-auto lg:w-2/3 lg:px-0 lg: xl:w-1/2 min-[1440px]:mt-8 mt-3 max-[567px]:flex-col">
      <PromptInput
        negativePrompt={negativePrompt}
        setNegativePrompt={setNegativePrompt}
        prompt={prompt}
        setPrompts={setPrompts}
        onClick={() => alert("generate clicked")}
      />
    </div>
  );
};
