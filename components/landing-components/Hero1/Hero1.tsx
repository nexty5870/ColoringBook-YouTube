/* eslint-disable @next/next/no-img-element */
import { GetStartedButton1, Rating } from "@/components/landing-components";

const Hero1 = () => {
  return (
    <section className="w-full px-10 mt-[152px] relative">
      <style>
        {`
        .gradient-text {
          /* Fallback: Set a background color. */
          background-color: red;
          
          /* Create the gradient. */
          background-image: linear-gradient(135deg, #3E00FA 0%, #6FA0FF 100%);
          
          /* Set the background size and repeat properties. */
          background-size: 100%;
          background-repeat: repeat;
        
          /* Use the text as a mask for the background. */
          /* This will show the gradient as a text color rather than element bg. */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; 
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
        }


        @media (max-width: 540px) {
          .a541to600, .a601to800, .a801to1069, .a1070to1399, .a1400to1599, .largest {
            display: none;
          }
        }

        @media (min-width: 541px) and (max-width: 600px) {
          .smallest, .a601to800, .a801to1069, .a1070to1399, .a1400to1599, .largest {
            display: none;
          }
        }

        @media (min-width: 601px) and (max-width: 800px) {
          .smallest, .a541to600, .a801to1069, .a1070to1399, .a1400to1599, .largest {
            display: none;
          }
        }

        @media (min-width: 801px) and (max-width: 1069px) {
          .smallest, .a541to600, .a601to800, .a1070to1399, .a1400to1599, .largest {
            display: none;
          }
        }

        @media (min-width: 1070px) and (max-width: 1399px) {
          .smallest, .a541to600, .a601to800, .a801to1069, .a1400to1599, .largest {
            display: none;
          }
        }

        @media (min-width: 1400px) and (max-width: 1599px) {
          .smallest, .a541to600, .a601to800, .a801to1069, .a1070to1399, .largest {
            display: none;
          }
        }

        @media (min-width: 1600px) {
          .smallest, .a541to600, .a601to800, .a801to1069, .a1070to1399, .a1400to1599 {
            display: none;
          }
        }
        `}
      </style>
      <div className="absolute right-[50%] left-[50%] translate-x-[-50%] min-w-[40%] max-sm:min-w-[70%] max-[768px]:w-[85%] flex justify-center items-center flex-col max-sm:top-[-22%] max-lg:top-[-15%]">
        <h1 className=" text-[60px] max-[1245px]:text-[50px] max-[1035px]:text-[29px] max-sm:text-[29px] font-extrabold mb-0">
          Craft Logos in
        </h1>
        <h1 className="text-[60px] max-[1245px]:text-[50px]  max-sm:text-[29px] max-[1035px]:text-[29px] font-extrabold gradient-text mb-0">
          Seconds With AI
        </h1>
        <h3 className="font-regular mt-3 text-center text-[#1F2937] text-sm max-sm:text-xs">
          Craft distinctive and tailor-made logos, free from generic designs.
          Harness the full potential of AI to take charge of every detail in
          shaping your logo.
        </h3>
        <GetStartedButton1 />
        <div className="flex gap-[40px] mt-[40px] max-sm:mt-[15px] max-[700px]:mt-5 items-center justify-center max-sm:flex-col">
          <Rating priority={true} />
        </div>
      </div>

      <div className="smallest">
        {/* <Hero0to540 /> */}
        <img
          src="/assets/hero-540.png"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>

      <div className="a541to600">
        {/* <Hero540to600 /> */}
        <img
          src="/assets/hero-540-600.png"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>

      <div className="a601to800">
        {/* <Hero600to800 /> */}
        <img
          src="/assets/hero-600-800.png"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>

      <div className="a801to1069">
        {/* <HeroSvg800to1000 /> */}
        <img
          src="/assets/hero-800-1000.png"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>

      <div className="a1070to1399">
        {/* <HeroSvg1070to1399 /> */}
        <img
          src="/assets/hero/hero-1070-1399.svg"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>

      <div className="a1400to1599">
        {/* <HeroSvg1400To1599 /> */}
        <img
          src="/assets/hero/hero-1400-1599.svg"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>

      <div className="largest">
        {/* <HeroSvgPlus1600 /> */}
        <img
          src="/assets/hero/hero-plus-1600.svg"
          className="w-full"
          alt="SVG Hero Background"
        />
      </div>
    </section>
  );
};

export default Hero1;
