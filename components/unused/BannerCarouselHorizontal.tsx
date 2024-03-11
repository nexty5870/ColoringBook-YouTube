/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  className?: string;
};

const BannerCaraouselHorizontal = ({ className }: Props) => {
  return (
    <div className="pr-[60px]   xl:hidden pb-12 overflow-hidden ">
      <div className="relative w-[489px] h-[145px] mb-4">
        <div className="absolute flex flex-row gap-[17px] h-full overflow-scroll carousel carousel-up">
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt="Astronaut skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt="Astronaut riding scooter"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt="Dog skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt="Astronaut skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt="Astronaut riding scooter"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt="Dog skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt="Astronaut riding scooter"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt=""
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt="Astronaut sitting on moon"
          />
        </div>
      </div>
      <div className="relative w-[489px] h-[145px] ">
        <div className="absolute flex  gap-[17px] h-full overflow-scroll carousel carousel-down">
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt="Astronaut skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt="Astronaut riding scooter"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/dog-skateboarding.webp"
            alt="Dog skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-skateboarding.webp"
            alt="Astronaut skateboarding"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-sitting-on-moon.webp"
            alt="Astronaut sitting on moon"
          />
          <img
            className="h-[133px] rounded-[20px]"
            src="/assets/astronaut-scooter.webp"
            alt="Astronaut riding scooter"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCaraouselHorizontal;
