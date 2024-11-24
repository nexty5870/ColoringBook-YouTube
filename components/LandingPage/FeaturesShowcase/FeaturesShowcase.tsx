/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import type { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AnimatedTabs } from "@/components/app-components";
import Image from "next/image";
import ExternalLink from "@/components/docs/ExternalLink/ExternalLink";
import { NSButton } from "@/components/base";

export interface Option {
  label: string;
  value: string;
  content: ReactNode[];
  docsLink?: string;
}

const options: Option[] = [
  {
    label: "Payments",
    value: "payments",
    docsLink: "#",
    content: [
      "Consequat ut duis esse deserunt.",
      "Ipsum minim ad incididunt pariatur dolore fugiat tempor eiusmod cillum aliquip incididunt magna.",
      "Labore quis pariatur ad labore ex minim et Lorem commodo amet consequat.",
      <span key={1}>
        Time Saved:{" "}
        <span className="font-semibold text-surface-success">15 hours</span>
      </span>,
      <span key={2} className="flex items-center">
        with{" "}
        <Image
          className="h-[20px]"
          src="/assets/features-showcase/stripe.svg"
          width={60}
          height={20}
          alt="Stripe logo"
        />{" "}
        or{" "}
        <Image
          className="h-[75px] ml-2"
          src="/assets/features-showcase/lemon-squeezy.svg"
          width={150}
          height={75}
          alt="Lemon Squeezy Logo"
        />{" "}
      </span>,
    ],
  },
  {
    label: "Authentication",
    value: "authetication",
    docsLink: "#",
    content: [
      "Culpa quis culpa mollit Lorem esse occaecat ex.",
      "Anim labore officia excepteur sint magna sint nulla duis.",
      "Ullamco consequat est non ea id incididunt adipisicing magna anim nulla.",
      "Tempor sint ipsum labore cupidatat eu do sunt esse exercitation do minim nostrud aliqua.",
      <span key={3}>
        Time Saved:{" "}
        <span className="font-semibold text-surface-success">4 hours</span>
      </span>,
      <span key={2} className="flex items-center">
        with{" "}
        <div className="h-[60px] flex items-center">
          <Image
            className="h-[20px]"
            src="/assets/features-showcase/supabase.svg"
            width={40}
            height={40}
            alt="Supabase logo"
          />
        </div>{" "}
        <strong>Supabase</strong>
      </span>,
    ],
  },
  {
    label: "SEO",
    value: "seo",
    docsLink: "/docs/features/seo",
    content: [
      <span key="seo-1">
        Complete blog framework (
        <ExternalLink follow={true} href="https://sketchlogo.ai/blog">
          https://sketchlogo.ai/blog
        </ExternalLink>
        )
      </span>,
      "Cupidatat qui non tempor sunt.",
      "Consectetur ex laborum sint excepteur labore tempor pariatur deserunt ex voluptate ex.",
      "Cillum aliquip dolor sunt esse dolore deserunt nulla commodo minim est culpa.",
      "Laboris anim in officia amet qui ex pariatur nulla adipisicing ut commodo.",
      "Culpa dolor aliquip occaecat eiusmod tempor irure exercitation amet.",
      <span key="seo-2">
        Time Saved:{" "}
        <span className="font-semibold text-surface-success">8 hours</span>
      </span>,
    ],
  },
  {
    label: "Database",
    value: "database",
    docsLink: "#",
    content: [
      "Sint enim est est adipisicing magna excepteur exercitation qui magna dolor quis sunt esse.",
      "Eu occaecat non amet ea ex enim occaecat aliqua consectetur deserunt aute aliqua enim tempor.",
      <span key={4} className="flex items-center">
        with{" "}
        <div className="h-[60px] flex items-center">
          <Image
            className="h-[20px]"
            src="/assets/features-showcase/supabase.svg"
            width={40}
            height={40}
            alt="Supabase logo"
          />
        </div>{" "}
        <strong>Supabase</strong>
      </span>,
    ],
  },
  {
    label: "AI",
    value: "ai",
    docsLink: "#",
    content: [
      "Enim labore reprehenderit proident consectetur.",
      "Dolor commodo ullamco sit quis id amet.",
      <span key="ai-1">
        Time Saved:{" "}
        <span className="font-semibold text-surface-success">8 hours</span>
      </span>,
    ],
  },
  {
    label: "Style",
    value: "style",
    docsLink: "#",
    content: [
      "Non cupidatat labore dolor Lorem.",
      "Dolore sunt qui anim anim deserunt.",
      "Consequat amet cillum dolor irure incididunt esse enim eiusmod commodo laborum aliquip do tempor.",
      <span key="style-1">
        Time Saved:{" "}
        <span className="font-semibold text-surface-success">10+ hours</span> of
        challenges and frustrations...
      </span>,
      <span key={4} className="flex items-center">
        with{" "}
        <div className="h-[60px] flex items-center">
          <Image
            className="h-[20px]"
            src="/assets/features-showcase/tailwind.svg"
            width={40}
            height={40}
            alt="Tailwind logo"
          />
        </div>{" "}
        <strong>Tailwind</strong>
      </span>,
    ],
  },
  {
    label: "Emails",
    value: "emails",
    docsLink: "#",
    content: [
      "Sit consequat cupidatat aliquip pariatur pariatur.",
      "Pariatur culpa labore non minim magna nulla minim consectetur.",
      "Id exercitation duis incididunt minim incididunt in velit eiusmod qui in pariatur pariatur eiusmod duis.",
      "Eu reprehenderit eu adipisicing laborum laboris adipisicing proident fugiat.",
      <span key="emails-1">
        Time Saved:{" "}
        <span className="font-semibold text-surface-success">3 hours</span>
      </span>,
      "Frustration: 0",
    ],
  },
  {
    label: "More",
    value: "more",
    content: [
      "Anim est duis incididunt eu.",
      "Proident amet commodo est ullamco nulla incididunt mollit voluptate ipsum.",
      "Minim voluptate dolore irure id est aliquip qui occaecat ipsum adipisicing sit esse elit.",
      "Proident velit excepteur ea irure sint in esse.",
      "Cillum in pariatur cillum et ea laboris laborum quis.",
      <span key="more-1" className="flex items-center">
        Time Saved:{" "}
        <span className="flex items-center font-semibold text-surface-success">
          <svg
            className="ml-1 mr-1"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="50"
            viewBox="0 0 1280.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
              fill="#55B685"
              stroke="none"
            >
              <path
                fill="#55B685"
                d="M9638 6075 c-772 -93 -1504 -467 -2317 -1184 -198 -174 -334 -303
-657 -624 -230 -229 -264 -258 -281 -249 -11 6 -100 93 -199 194 -1144 1171
-1886 1664 -2745 1822 -560 103 -1141 38 -1669 -186 -885 -376 -1533 -1167
-1714 -2093 -41 -207 -51 -318 -51 -565 0 -392 54 -719 176 -1065 338 -964
1145 -1627 2164 -1779 634 -95 1337 26 1957 335 243 121 448 250 703 441 321
239 556 450 1061 950 176 175 327 318 334 318 8 0 77 -66 154 -146 172 -179
592 -584 770 -743 820 -731 1442 -1055 2226 -1163 58 -8 194 -12 350 -12 213
0 279 4 400 23 650 100 1205 379 1659 832 457 457 742 1045 823 1699 19 155
16 563 -6 720 -78 561 -275 1067 -568 1457 -95 128 -294 332 -425 435 -364
290 -837 486 -1378 570 -172 26 -594 34 -767 13z m-6331 -1199 c336 -71 676
-233 1010 -481 119 -88 297 -234 413 -339 146 -133 880 -850 880 -860 0 -16
-640 -649 -795 -788 -492 -438 -947 -715 -1375 -839 -202 -58 -321 -74 -565
-74 -190 0 -235 3 -334 23 -590 119 -1022 504 -1210 1077 -160 489 -130 953
90 1385 252 496 706 824 1266 915 63 10 146 13 293 10 172 -3 225 -8 327 -29z
m6863 19 c327 -46 605 -171 841 -378 439 -384 649 -1063 517 -1677 -134 -625
-615 -1131 -1229 -1295 -148 -39 -279 -55 -454 -55 -310 0 -559 62 -870 215
-327 160 -642 391 -1037 761 -248 232 -743 719 -746 734 -3 16 466 495 668
681 682 630 1221 933 1800 1014 130 18 382 18 510 0z"
              />
            </g>
          </svg>{" "}
          hours
        </span>
      </span>,
    ],
  },
];

const FeaturesShowcase: FC = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  return (
    <section className="relative ">
      <div className="absolute top-[-118px] left-0 w-[436px] h-[436px] bg-surface-brand rounded-full blur-[150px] opacity-10 z-10 pointer-events-none"></div>
      <div className="relative z-0 mx-8 mt-8 overflow-hidden bg-slate-50 rounded-2xl">
        <div className="flex flex-col gap-3 px-8 py-12 mx-auto max-sm:py-6 max-w-7xl">
          <div className="flex flex-col items-center text-left basis-1/2">
            <div className="w-[60%] max-sm:w-[95%] mb-2">
              <h2 className="text-4xl font-extrabold text-center max-sm:text-2xl text-base-content">
                Anim dolore consectetur nisi labore ipsum do.
              </h2>
            </div>
          </div>
          <p className="mx-auto text-base font-normal leading-relaxed text-center text-gray-800 max-sm:text-sm text-opacity-80 font-inter">
            Aliqua commodo labore officia fugiat eu labore. Proident amet
            ullamco enim consectetur labore Lorem culpa nisi magna ex amet sit.
            Ex qui ea qui adipisicing ullamco in nulla aute laboris in sunt
            proident consequat. Qui magna eiusmod adipisicing qui reprehenderit
            occaecat non veniam ullamco ea sit.
          </p>

          <div>
            <AnimatedTabs
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              containerClassName="mt-5"
              subContainerClassName="z-10 bg-white"
            />
            <div>
              <ul>
                {selectedOption.content?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 mb-2">
                    {" "}
                    <div className="w-[20px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M18.1632 6.28815L8.16325 16.2882C8.07615 16.3756 7.97266 16.4449 7.8587 16.4922C7.74475 16.5395 7.62257 16.5639 7.49918 16.5639C7.3758 16.5639 7.25362 16.5395 7.13967 16.4922C7.02571 16.4449 6.92222 16.3756 6.83512 16.2882L2.46012 11.9132C2.37292 11.8259 2.30374 11.7224 2.25655 11.6085C2.20935 11.4945 2.18506 11.3724 2.18506 11.2491C2.18506 11.1258 2.20935 11.0036 2.25655 10.8897C2.30374 10.7758 2.37292 10.6722 2.46012 10.585C2.54733 10.4978 2.65086 10.4286 2.7648 10.3814C2.87874 10.3343 3.00086 10.31 3.12418 10.31C3.24751 10.31 3.36963 10.3343 3.48357 10.3814C3.59751 10.4286 3.70104 10.4978 3.78825 10.585L7.49997 14.2967L16.8367 4.96159C17.0128 4.78547 17.2517 4.68652 17.5007 4.68652C17.7498 4.68652 17.9887 4.78547 18.1648 4.96159C18.3409 5.13771 18.4399 5.37658 18.4399 5.62565C18.4399 5.87472 18.3409 6.11359 18.1648 6.28971L18.1632 6.28815Z"
                          fill="#3E00FA"
                        />
                      </svg>{" "}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                {selectedOption?.docsLink && (
                  <NSButton
                    onClick={() => router.push(selectedOption.docsLink)}
                    outlined
                  >
                    <span className="flex items-center">
                      See in the Docs{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.3172 10.4423L11.6922 16.0673C11.5749 16.1846 11.4159 16.2505 11.25 16.2505C11.0841 16.2505 10.9251 16.1846 10.8078 16.0673C10.6905 15.95 10.6247 15.791 10.6247 15.6251C10.6247 15.4593 10.6905 15.3002 10.8078 15.1829L15.3664 10.6251H3.125C2.95924 10.6251 2.80027 10.5593 2.68306 10.442C2.56585 10.3248 2.5 10.1659 2.5 10.0001C2.5 9.83434 2.56585 9.67537 2.68306 9.55816C2.80027 9.44095 2.95924 9.3751 3.125 9.3751H15.3664L10.8078 4.81729C10.6905 4.70002 10.6247 4.54096 10.6247 4.3751C10.6247 4.20925 10.6905 4.05019 10.8078 3.93292C10.9251 3.81564 11.0841 3.74976 11.25 3.74976C11.4159 3.74976 11.5749 3.81564 11.6922 3.93292L17.3172 9.55792C17.3753 9.61596 17.4214 9.68489 17.4529 9.76077C17.4843 9.83664 17.5005 9.91797 17.5005 10.0001C17.5005 10.0822 17.4843 10.1636 17.4529 10.2394C17.4214 10.3153 17.3753 10.3842 17.3172 10.4423Z"
                          fill="#3E00FA"
                        />
                      </svg>
                    </span>
                  </NSButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
