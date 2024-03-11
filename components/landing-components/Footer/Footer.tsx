/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import config from "@/config";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="mx-10 mb-10 bg-slate-50 rounded-2xl">
      <div className="px-8 py-24 mx-auto max-w-7xl">
        <div className="flex flex-col flex-wrap lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex items-center justify-center gap-2 md:justify-start"
            >
              <img
                src={"/assets/next-starter-logo-h.svg"}
                alt={`${config.appName} logo`}
                className="w-8"
                width={100}
                style={{ width: "150px" }}
              />
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap justify-center flex-grow mt-10 -mb-10 text-center md:mt-0">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-base-content md:text-left">
                LINKS
              </div>

              <div className="flex flex-col items-center justify-center gap-2 mb-10 text-sm md:items-start">
                {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <Link href="/#pricing" className="link link-hover">
                  Pricing
                </Link>
                <Link href="/blog" className="link link-hover">
                  Blog
                </Link>
                {/* <a href="/#" target="_blank" className="link link-hover">
                  Affiliates
                </a> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-base-content md:text-left">
                LEGAL
              </div>

              <div className="flex flex-col items-center justify-center gap-2 mb-10 text-sm md:items-start">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
