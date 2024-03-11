"use client";
import React, { FC } from "react";
import heroLottie from "../../../public/assets/lottie/hero-lottie.json";
import Lottie from "lottie-react";

interface HeroLottieProps {
  className?: string;
}

const HeroLottie: FC<HeroLottieProps> = ({ className }) => {
  return (
    <Lottie
      className={className || ""}
      animationData={heroLottie}
      loop={true}
      autoplay={true}
    />
  );
};

export default HeroLottie;
