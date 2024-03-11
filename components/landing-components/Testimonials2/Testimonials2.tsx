/* eslint-disable react/no-unescaped-entities */
import { JSX } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";
import "./Testimonials2.scss";
// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance.
// Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes: {
  productHunt: {
    id: string;
    ariaLabel: string;
    svg: JSX.Element;
  };
  twitter: {
    id: string;
    ariaLabel: string;
    svg: JSX.Element;
  };
  other: { id: string; ariaLabel?: null; svg?: null };
} = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  other: { id: "other" },
};

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
const list: {
  username?: string;
  name: string;
  text: string;
  type?: (typeof refTypes)[keyof typeof refTypes];
  link?: string;
  img?: string | StaticImageData;
}[] = [
  {
    // Show @username for social media like Twitter. Does not link anywhere but cool to display
    username: "SaraSmallBiz",
    name: "Sara Mitchell",
    text: " In just minutes, I transformed a basic concept into a nice looking logo, experiencing a level of flexibility to stylize AI illustrations that has truly set my brand apart. 👇 Highly recommended for those seeking a unique and edge in branding!!",
    // use refTypes.other if you don't want to display an icon
    type: refTypes.twitter,
    // A statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "/assets/testimonials/sara-mitchell.jpg",
  },
  {
    username: "chris_mark",
    name: "Chris Davidson",
    text: "As a marketing professional, Sketch Logo AI is my secret weapon for creating eye-catching visuals. 🚀 The ability to transform images into stylized logos has saved me time and added a creative flair to our campaigns. Love it!",
    type: refTypes.twitter,
    img: "/assets/testimonials/david_marketing.webp",
  },
  {
    username: "CreativeEm",
    name: "Emily Turner",
    text: "I'm in awe of what Sketch Logo AI can do! It's unleashed my creativity by turning my sketches into polished logos. This app is a must-have for anyone looking to express their unique brand identity effortlessly.",
    type: refTypes.productHunt,
    img: "/assets/testimonials/emily.webp",
  },
  {
    name: "Alex Peterson",
    text: "Sketch Logo AI is a dream come true for designers. 🚀 It simplifies the logo creation process, and the generative AI adds an element of surprise and innovation to my projects. It's become my go-to tool!",
    type: refTypes.productHunt,
    img: "/assets/testimonials/alex-peterson.webp",
  },
  {
    username: "StartupMike9492",
    name: "Michael Lawson",
    text: "Sketch Logo AI helped us achieve just that by transforming our images into memorable illustrations. The results exceeded our expectations, and the process was seamless.",
    type: refTypes.twitter,
  },
  {
    username: "linda_rod_soci",
    name: "Linda Rodriguez",
    text: "Sketch Logo AI has taken my branding to the next level! I can effortlessly convert my snapshots into unique illustrations that perfectly match my aesthetic. It's become an integral part of my content creation routine.",
    type: refTypes.productHunt,
  },
  {
    name: "Jason Bennett",
    text: "Sketch Logo AI is a tattoo dream come true! I sketch, and the app turns my ideas into ink-worthy designs. It's my go-to for creating personalized tattoos that truly express who I am. Simple, speedy, and sensational results!",
    type: refTypes.other,
  },
  {
    username: "welcometobriami",
    name: "Brian Thompson",
    text: "As a designer and tattoo enthusiast, Sketch Logo AI has become my playground for creating personalized body art. It effortlessly translates my design ideas into tattoo-ready illustrations, making the entire process exciting and collaborative.",
    type: refTypes.twitter,
    img: "/assets/testimonials/brian.webp",
  },
  {
    username: "TattooArtistElena",
    name: "Elena Martinez",
    text: "Sketch Logo AI has turned my passion for tattoos into a creative adventure. It's not just about getting inked; it's about crafting a visual story on my skin. The app's innovation and user-friendly interface make it a must-have for anyone serious about their ink.",
    type: refTypes.productHunt,
  },
  // The last testimonial is featured on big devices (span 2 columns + big font) 👇
  {
    username: "DesignInkMaya",
    name: "Maya Kowalski",
    text: "Sketch Logo AI has made my tattoo journey even more exciting. I can easily experiment with various design elements and styles, turning my ideas into stunning tattoo possibilities. It's like having a tattoo studio in my pocket! 100% worth it 🚀🚀🚀",
    type: refTypes.twitter,
    img: "/assets/testimonials/maya_ink.webp",
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className=" relative w-[462px] h-[231px]  p-8 bg-white rounded-3xl">
        <blockquote className="relative">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {testimonial.img ? (
              <Image
                className="w-10 h-10 rounded-full object-cover"
                src={list[i].img}
                alt={`${list[i].name}'s testimonial for ${config.appName}`}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="w-full flex items-end justify-between gap-2">
            <div>
              <div className="text-sm font-medium text-base-content">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            {testimonial.type?.svg && (
              <span
                className="shrink-0 "
                aria-label={testimonial.type?.ariaLabel}
              >
                {testimonial.type?.svg}
              </span>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials2 = () => {
  return (
    <section className="mx-8 relative" id="testimonials">
      <div className="absolute top-[-118px] right-0 w-[436px] h-[436px] bg-surface-brand rounded-full blur-[150px] opacity-10"></div>
      <div className="py-24 max-w-7xl bg-slate-50  flex flex-col items-start mx-auto justify-start rounded-[48px]">
        <div className="flex px-16 flex-col justify-start items-center text-center w-full">
          <div className="px-3 py-2 bg-violet-700 bg-opacity-5 rounded-[200px] border border-surface-brand justify-start items-end gap-2 flex mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M8.9375 6.125V11.75H3.625C3.45924 11.75 3.30027 11.6842 3.18306 11.5669C3.06585 11.4497 3 11.2908 3 11.125V6.125C3 5.95924 3.06585 5.80027 3.18306 5.68306C3.30027 5.56585 3.45924 5.5 3.625 5.5H8.3125C8.47826 5.5 8.63723 5.56585 8.75444 5.68306C8.87165 5.80027 8.9375 5.95924 8.9375 6.125ZM17.375 5.5H12.6875C12.5217 5.5 12.3628 5.56585 12.2456 5.68306C12.1283 5.80027 12.0625 5.95924 12.0625 6.125V11.125C12.0625 11.2908 12.1283 11.4497 12.2456 11.5669C12.3628 11.6842 12.5217 11.75 12.6875 11.75H18V6.125C18 5.95924 17.9342 5.80027 17.8169 5.68306C17.6997 5.56585 17.5408 5.5 17.375 5.5Z"
                fill="#3E00FA"
              />
              <path
                d="M8.3125 4.875H3.625C3.29348 4.875 2.97554 5.0067 2.74112 5.24112C2.5067 5.47554 2.375 5.79348 2.375 6.125V11.125C2.375 11.4565 2.5067 11.7745 2.74112 12.0089C2.97554 12.2433 3.29348 12.375 3.625 12.375H8.3125V13C8.3125 13.663 8.04911 14.2989 7.58027 14.7678C7.11143 15.2366 6.47554 15.5 5.8125 15.5C5.64674 15.5 5.48777 15.5658 5.37056 15.6831C5.25335 15.8003 5.1875 15.9592 5.1875 16.125C5.1875 16.2908 5.25335 16.4497 5.37056 16.5669C5.48777 16.6842 5.64674 16.75 5.8125 16.75C6.80674 16.749 7.75997 16.3535 8.46301 15.6505C9.16605 14.9475 9.56147 13.9942 9.5625 13V6.125C9.5625 5.79348 9.4308 5.47554 9.19638 5.24112C8.96196 5.0067 8.64402 4.875 8.3125 4.875ZM8.3125 11.125H3.625V6.125H8.3125V11.125ZM17.375 4.875H12.6875C12.356 4.875 12.038 5.0067 11.8036 5.24112C11.5692 5.47554 11.4375 5.79348 11.4375 6.125V11.125C11.4375 11.4565 11.5692 11.7745 11.8036 12.0089C12.038 12.2433 12.356 12.375 12.6875 12.375H17.375V13C17.375 13.663 17.1116 14.2989 16.6428 14.7678C16.1739 15.2366 15.538 15.5 14.875 15.5C14.7092 15.5 14.5503 15.5658 14.4331 15.6831C14.3158 15.8003 14.25 15.9592 14.25 16.125C14.25 16.2908 14.3158 16.4497 14.4331 16.5669C14.5503 16.6842 14.7092 16.75 14.875 16.75C15.8692 16.749 16.8225 16.3535 17.5255 15.6505C18.2285 14.9475 18.624 13.9942 18.625 13V6.125C18.625 5.79348 18.4933 5.47554 18.2589 5.24112C18.0245 5.0067 17.7065 4.875 17.375 4.875ZM17.375 11.125H12.6875V6.125H17.375V11.125Z"
                fill="#3E00FA"
              />
            </svg>

            <div className="Testimonials text-content-brand text-sm font-semibold leading-[18.20px]">
              Testimonials
            </div>
          </div>
          <div className="flex flex-col justify-start items-center text-center w-full mb-20">
            <div className="mb-8">
              <h2 className="sm:text-5xl text-4xl text-center leading-16  font-extrabold text-base-content">
                Join over 250 creators leveraging Sketch Logo AI's creative
                prowess!
              </h2>
            </div>
            <p className="lg:w-2/3 mx-auto text-center text-gray-800 text-opacity-80 text-base font-normal font-inter leading-relaxed">
              Transforming Visions into Masterpieces: Join 250+ Creators
              Harnessing the Magic of Sketch Logo AI!
            </p>
          </div>
        </div>
        <ul
          role="list"
          className="grid overflow-hidden max-w-2xl grid-cols-1 gap-6 py-2 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          <li>
            <ul
              role="list"
              className="flex gap-x-6 gap-6 duration-500 sm:gap-x-8 mb-4 loop-slider"
            >
              <div
                className="inner flex gap-6"
                style={{ width: `${462 * 6}px`, flexBasis: `${462 * 6}px` }}
              >
                {[...Array(3)].map((e, i) => (
                  <Testimonial key={i} i={i} />
                ))}
                {[...Array(3)].map((e, i) => (
                  <Testimonial key={i + 10} i={i} />
                ))}
              </div>
            </ul>
            <div className="inner-2 flex gap-6">
              <ul role="list" className="flex gap-x-6  sm:gap-x-8">
                {[...Array(3)].map((e, i) => (
                  <Testimonial key={i} i={i + 3} />
                ))}
                {[...Array(3)].map((e, i) => (
                  <Testimonial key={i + 50} i={i + 3} />
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials2;
