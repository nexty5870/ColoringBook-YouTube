/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

// Add the Footer to the bottom of your landing page and more.

const Footer = () => {
  return (
    <footer className="mx-10 mb-10 bg-slate-50 rounded-2xl">
      <div className="px-8 py-12 mx-auto max-w-7xl">
        <div className="text-center">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-bold text-gray-900">ColorBook SaaS</span>
          </Link>
          
          <p className="text-base text-gray-600 mb-6">
            Transform your ideas into beautiful coloring pages with AI
          </p>

          <p className="text-sm text-gray-500">
            Copyright {new Date().getFullYear()} ColorBook SaaS - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
