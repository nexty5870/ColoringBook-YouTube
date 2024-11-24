import React, { useState } from "react";
import { PromptInput } from "@/components/app-components";

const PromptBoxShowcase = () => {
  const [prompt] = useState("");
  const [_, setPrompts] = useState([]);
  const [negativePrompt, setNegativePrompt] = useState<string>("");

  return (
    <PromptInput
      className="max-[567px]:flex-col w-full"
      negativePrompt={negativePrompt}
      setNegativePrompt={setNegativePrompt}
      prompt={prompt}
      setPrompts={setPrompts}
    />
  );
};

export default PromptBoxShowcase;
