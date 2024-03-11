/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef, useState } from "react";
import type { FC } from "react";
import { FAQItemProps, FAQProps } from "./types";
import ExternalLink from "@/components/docs/ExternalLink/ExternalLink";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

const faqList: FAQItemProps[] = [
  {
    question: "Laborum Lorem elit duis fugiat.",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Eu commodo exercitation ullamco reprehenderit aliquip labore. Nostrud
        aliqua ea elit dolor id mollit qui proident dolor duis ullamco nisi
        velit exercitation. Est amet et laboris ad officia duis. Consequat do in
        ex anim ullamco laborum amet.
      </div>
    ),
  },
  {
    question:
      "Magna et esse proident est amet ut pariatur ullamco ut ut elit fugiat in ex.",
    answer: (
      <p>
        Esse elit ut ea exercitation id duis dolor ullamco irure mollit ex. Et
        eiusmod anim deserunt nisi sint excepteur deserunt excepteur proident
        laboris enim labore excepteur laborum. Officia ipsum ut in Lorem qui
        officia duis ullamco.
      </p>
    ),
  },
  {
    question:
      "Commodo tempor tempor consectetur cillum voluptate ullamco esse deserunt do ipsum esse et incididunt irure.",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Voluptate do quis pariatur non laboris quis excepteur nulla eu quis
        nulla. Do fugiat occaecat anim duis in. Pariatur cupidatat do proident
        proident aliquip do consequat et ex sit non ad sint Lorem. Aute ex elit
        nostrud cillum do ad ea minim officia consectetur consectetur
        exercitation ut irure. Aliquip eu laborum ipsum elit in reprehenderit
        veniam qui do culpa pariatur ad nostrud.
      </div>
    ),
  },
  {
    question:
      "Tempor excepteur ipsum laboris in irure incididunt voluptate cillum commodo occaecat tempor minim.",
    answer: (
      <p>
        Excepteur deserunt eiusmod consequat enim eiusmod nulla nisi anim et.
        Fugiat in consequat aliqua consectetur cillum eu aute. Mollit dolore
        sunt qui eiusmod exercitation.
      </p>
    ),
  },
  {
    question: "Aliquip non adipisicing eu quis excepteur deserunt ad minim.",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Officia exercitation laboris quis irure mollit consectetur. Cupidatat
        deserunt exercitation officia labore incididunt elit. Tempor et ipsum
        sint fugiat. Duis pariatur duis quis sit minim in pariatur. Eiusmod
        fugiat do duis fugiat nulla. Fugiat duis officia labore eu commodo ut
        cillum Lorem do in voluptate proident ad. Enim est ullamco ullamco
        fugiat elit deserunt voluptate ex.
      </div>
    ),
  },
  {
    question: "Amet esse elit cupidatat ex anim.",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Nisi Lorem sunt ipsum magna consequat ullamco. Eiusmod nisi consectetur
        irure quis incididunt. Dolor culpa ex dolor anim occaecat nulla
        cupidatat eiusmod consectetur qui deserunt elit velit. Nisi amet aute
        exercitation esse aliquip in est laboris minim cillum cillum fugiat.
        Sunt proident sunt occaecat commodo minim. Proident irure fugiat culpa
        nulla cillum eiusmod aute qui sit proident dolore esse in. Et velit do
        labore dolor voluptate fugiat aliquip cupidatat elit aute.
      </div>
    ),
  },
  {
    question: "Ut amet enim non anim Lorem esse dolore nulla Lorem aliqua.",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Non id quis commodo aute sunt aliqua id adipisicing ullamco cupidatat
        commodo proident. Consequat do fugiat consequat elit consectetur.
        Cupidatat anim sit Lorem ea cupidatat dolore veniam dolore nisi qui
        Lorem culpa. Consequat in non sit aliqua consequat enim Lorem
        exercitation in veniam. Amet veniam sunt adipisicing laboris amet sint.
        Dolore anim est culpa elit consectetur exercitation deserunt et. Aliquip
        minim incididunt sint sit sint nulla amet.
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex items-center w-full gap-2 py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ: FC<FAQProps> = ({ questions = faqList }) => {
  return (
    <section className="relative mx-8 bg-slate-50 rounded-2xl" id="faq">
      <div className="absolute top-[-118px] right-0 w-[436px] h-[436px] bg-surface-brand rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-[100px] max-sm:hidden left-[-90px] w-[300px] h-[300px] bg-surface-brand rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="flex flex-col gap-12 px-8 py-24 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-left basis-1/2">
          <div className="px-3 py-2 bg-violet-700 bg-opacity-5 rounded-[200px] border border-surface-brand justify-start items-end gap-2 pr-4 flex mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M17.5 10.2803C17.5 11.7636 17.0601 13.2137 16.236 14.4471C15.4119 15.6804 14.2406 16.6417 12.8701 17.2094C11.4997 17.777 9.99168 17.9256 8.53683 17.6362C7.08197 17.3468 5.7456 16.6325 4.6967 15.5836C3.64781 14.5347 2.9335 13.1983 2.64411 11.7435C2.35472 10.2886 2.50325 8.78059 3.07091 7.41015C3.63856 6.0397 4.59986 4.86836 5.83323 4.04425C7.0666 3.22014 8.51664 2.78027 10 2.78027C11.9891 2.78027 13.8968 3.57045 15.3033 4.97697C16.7098 6.3835 17.5 8.29115 17.5 10.2803Z"
                fill="#3E00FA"
              />
              <path
                d="M10.9375 14.3428C10.9375 14.5282 10.8825 14.7094 10.7795 14.8636C10.6765 15.0178 10.5301 15.138 10.3588 15.2089C10.1875 15.2799 9.99896 15.2984 9.81711 15.2623C9.63525 15.2261 9.4682 15.1368 9.33709 15.0057C9.20598 14.8746 9.11669 14.7075 9.08052 14.5257C9.04434 14.3438 9.06291 14.1553 9.13387 13.984C9.20482 13.8127 9.32499 13.6663 9.47916 13.5633C9.63333 13.4603 9.81458 13.4053 10 13.4053C10.2486 13.4053 10.4871 13.504 10.6629 13.6799C10.8387 13.8557 10.9375 14.0941 10.9375 14.3428ZM10 5.90527C8.27657 5.90527 6.875 7.16699 6.875 8.71777V9.03027C6.875 9.19603 6.94085 9.355 7.05806 9.47222C7.17527 9.58943 7.33424 9.65527 7.5 9.65527C7.66576 9.65527 7.82474 9.58943 7.94195 9.47222C8.05916 9.355 8.125 9.19603 8.125 9.03027V8.71777C8.125 7.8584 8.96641 7.15527 10 7.15527C11.0336 7.15527 11.875 7.8584 11.875 8.71777C11.875 9.57715 11.0336 10.2803 10 10.2803C9.83424 10.2803 9.67527 10.3461 9.55806 10.4633C9.44085 10.5805 9.375 10.7395 9.375 10.9053V11.5303C9.375 11.696 9.44085 11.855 9.55806 11.9722C9.67527 12.0894 9.83424 12.1553 10 12.1553C10.1658 12.1553 10.3247 12.0894 10.4419 11.9722C10.5592 11.855 10.625 11.696 10.625 11.5303V11.474C12.05 11.2123 13.125 10.0756 13.125 8.71777C13.125 7.16699 11.7234 5.90527 10 5.90527ZM18.125 10.2803C18.125 11.8872 17.6485 13.4581 16.7557 14.7943C15.8629 16.1304 14.594 17.1718 13.1093 17.7868C11.6247 18.4018 9.99099 18.5627 8.4149 18.2492C6.8388 17.9356 5.39106 17.1618 4.25476 16.0255C3.11846 14.8892 2.34463 13.4415 2.03112 11.8654C1.71762 10.2893 1.87852 8.65562 2.49348 7.17097C3.10844 5.68632 4.14985 4.41737 5.486 3.52458C6.82214 2.6318 8.39303 2.15527 10 2.15527C12.1542 2.15755 14.2195 3.0143 15.7427 4.53754C17.266 6.06078 18.1227 8.12609 18.125 10.2803ZM16.875 10.2803C16.875 8.92053 16.4718 7.59132 15.7164 6.46073C14.9609 5.33014 13.8872 4.44895 12.631 3.9286C11.3747 3.40825 9.99238 3.2721 8.65876 3.53737C7.32514 3.80265 6.10013 4.45743 5.13864 5.41891C4.17716 6.3804 3.52238 7.60541 3.2571 8.93903C2.99183 10.2726 3.12798 11.655 3.64833 12.9112C4.16868 14.1675 5.04987 15.2412 6.18046 15.9966C7.31105 16.7521 8.64026 17.1553 10 17.1553C11.8227 17.1532 13.5702 16.4282 14.8591 15.1393C16.1479 13.8505 16.8729 12.103 16.875 10.2803Z"
                fill="#3E00FA"
              />
            </svg>

            <span className="text-content-brand font-semibold Occaecat adipisicing nisi anim sunt eu eu laborum laborum.eading-[18.20px] text-sm">
              FAQ
            </span>
          </div>
          <p className="text-3xl font-extrabold sm:text-4xl text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {questions.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
