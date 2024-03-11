import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://nextstarter.ai
// - Name: Next Starter AI
// - Contact information: support@nextstarter.ai
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://nextstarter.ai/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Next Starter AI - Terms of Service

Last Updated: March 5, 2024

Welcome to Next Starter AI! These Terms of Service govern your use of our website, https://nextstarter.ai, and the services provided by Next Starter AI.

1. Description of Services

Next Starter AI provides a JavaScript code boilerplate to facilitate the rapid launch of startups for entrepreneurs.

2. Ownership of Code

Upon purchasing a package, users can download code for app creation. Users own the code but are prohibited from reselling it. Refund requests are accepted within 7 days of purchase.

3. User Data Collection

We collect user data, including name, email, and payment information. For details, please refer to our Privacy Policy: Privacy Policy.

4. Non-personal Data Collection

Web cookies are used for non-personal data collection.

5. Governing Law

These terms are governed by the laws of France.

6. Updates to Terms

Users will receive updates to these terms via email.

For further information on data handling, please review our Privacy Policy.

If you have any questions or concerns, contact us at support@nextstarter.ai.

Thank you for choosing Next Starter AI!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
