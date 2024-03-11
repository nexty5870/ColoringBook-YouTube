/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  className?: string;
};

const BannerCaraouselVertical = ({ className }: Props) => {
  return (
    <div className="pr-[60px] justify-between gap-[17px] hidden xl:flex">
      <div className="relative w-[133px] h-full overflow-hidden">
        <div className="absolute flex flex-col gap-[17px] h-full overflow-scroll carousel carousel-left">
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt=""
          />
        </div>
      </div>
      <div className="relative w-[133px] h-full overflow-hidden">
        <div className="absolute flex flex-col gap-[17px] h-full overflow-scroll carousel-bottom carousel-right">
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt=""
          />
          <img
            className="h-[133px] w-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCaraouselVertical;
