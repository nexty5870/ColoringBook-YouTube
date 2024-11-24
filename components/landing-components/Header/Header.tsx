/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import type { JSX } from "react";
import classnames from "classnames";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ButtonSignin from "../ButtonSignin/ButtonSignin";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "#faq",
    label: "FAQ",
  },
];

const cta: JSX.Element = <ButtonSignin extraStyle="btn-primary" />;

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={classnames("fixed top-0 left-0 right-0 z-50 transition-all duration-300", {
        "bg-white/50 backdrop-blur-xl shadow-sm": isScrolled,
        "bg-white/0": !isScrolled,
      })}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">ColorBook SaaS</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleFAQClick}
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">{cta}</div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleFAQClick}
                  className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {label}
                </a>
              ))}
              <div>{cta}</div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
