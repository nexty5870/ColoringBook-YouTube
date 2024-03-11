"use client";
import React, { FC } from "react";
import addFontLottie from "../../../public/assets/lottie/add-font-lottie.json";
import Lottie from "lottie-react";

interface AddFontAnimationLottieProps {
  className?: string;
}

const AddFontAnimationLottie: FC<AddFontAnimationLottieProps> = ({
  className,
}) => {
  return (
    <Lottie
      className={className || ""}
      animationData={addFontLottie}
      loop={true}
      autoplay={true}
    />
  );
};

export default AddFontAnimationLottie;
