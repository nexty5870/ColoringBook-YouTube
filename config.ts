import themes from "daisyui/src/theming/themes.js";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "NextStarterAI",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "NextStarterAI: All in one development kit for your next project. Next.js, Tailwind CSS, Supabase, Stripe, Lemon Squeezy, and more.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "nextstarter.ai",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  canvas: {
    hideShapes: false,
    hideIcons: false,
    hideBrands: false,
    hideUpload: false,
    hideEraser: false,
    hideDownload: false,
    hideClear: false,
    hideUndoRedo: false,
    hideGrid: false,
    hideFullscreen: false,
  },
  paymentProvider: "lemonsqueezy",
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1OY9QNDZVfBq3yOWj6NtDjrV"
            : "price_1OY9QNDZVfBq3yOWj6NtDjrV",
        mode: "payment",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Standard",
        duration: "Pay once, use forever",
        freeDuration: "",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Starter",
        // The price you want to display, the one user will be charged on Stripe.
        price: 189,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 249,
        credits: 100,
        priority: 0,
        features: [
          {
            name: "NextJs Boilerplate",
          },
          { name: "App-Landing Page Components" },
          { name: "Stripe/Lemon Squeezy" },
          { name: "MongoDB/Supabase" },
          { name: "Google Tag Manager & Analytics" },
          { name: "Google OAuth/Magic Link" },
          { name: "Runpod&Replicate Api Integrations" },
          { name: "Seo Tags" },
          { name: "Blog Section" },
          { name: "Mailgun Email" },
          { name: "Lifetime Update" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1OY9QmDZVfBq3yOWHdxdDxJm"
            : "price_1OY9QmDZVfBq3yOWHdxdDxJm",
        mode: "subscription",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Pro",
        duration: "Yearly",
        freeDuration: "GET 2 MONTHS FREE",
        description: "You want to stay here!",
        price: 199,
        priceAnchor: 299,
        credits: 100,
        priority: 1,
        features: [
          {
            name: "Unlimited Usage",
          },
          { name: "Private Generations" },
          { name: "Commercial License" },
        ],
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1OkpDGDZVfBq3yOWRY5bPMft"
            : "price_1OkpDGDZVfBq3yOWRY5bPMft",
        mode: "payment",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "100 Credits",
        duration: "",
        freeDuration: "",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for exploring",
        // The price you want to display, the one user will be charged on Stripe.
        price: 10,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 15,
        credits: 100,
        priority: 0,
        features: [
          {
            name: "Unlimited Usage",
          },
          { name: "Private Generations" },
          { name: "Commercial License" },
        ],
      },
    ],
  },
  lemonsqueezy: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        variantId: process.env.NODE_ENV === "development" ? 214739 : 123456,
        mode: "subscription",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Monthly",
        duration: "Monthly",
        freeDuration: "",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Starter Pack",
        // The price you want to display, the one user will be charged on Stripe.
        price: 169,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priority: 0,
        features: [
          {
            name: "NextJs Boilerplate",
          },
          { name: "App-Landing Page Components" },
          { name: "Stripe/Lemon Squeezy" },
          { name: "Marketing Guide" },
          { name: "Supabase" },
          { name: "Google Tag Manager & Analytics" },
          { name: "Google OAuth/Magic Link" },
          { name: "Runpod&Replicate Api Integrations" },
          { name: "Seo Tags" },
          { name: "Blog Section" },
          { name: "Mailgun Email" },
          {
            name: "Lifetime Update",
            specialCase: "updated 4 days ago",
            excluded: true,
          },
          { name: "ChatGPT Prompts for terms/privacy", excluded: true },
        ],
      },
      {
        variantId: process.env.NODE_ENV === "development" ? 257037 : 123456,
        mode: "payment",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "One Time",
        duration: "Pay once, use forever",
        freeDuration: "",
        description: "All in",
        price: 199,
        priority: 1,
        features: [
          {
            name: "NextJs Boilerplate",
          },
          { name: "App-Landing Page Components" },
          { name: "Stripe/Lemon Squeezy" },
          { name: "Marketing Guide" },
          { name: "Supabase" },
          { name: "Google Tag Manager & Analytics" },
          { name: "Google OAuth/Magic Link" },
          { name: "Runpod&Replicate Api Integrations" },
          { name: "Seo Tags" },
          { name: "Blog Section" },
          { name: "Mailgun Email" },
          { name: "Lifetime Update", specialCase: "updated 4 days ago" },
          { name: "ChatGPT Prompts for terms/privacy" },
        ],
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        variantId: process.env.NODE_ENV === "development" ? 257037 : 257037,
        mode: "payment",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Custom Plan",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Here to help you on your project.",
        custom: true, // This is a custom plan, change to button to "Contact us"
        // The price you want to display, the one user will be charged on Stripe.
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        credits: 100,
        priority: 0,
        features: [
          {
            name: "Next Starter AI Boilerplate",
          },
          { name: "Dedicated design/development team" },
          { name: "Fully custom code/design for your project" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mail",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Next Starter AI <noreply@mail.nextstarter.ai>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Berk at Next Starter AI <berk@mail.nextstarter.ai>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@mail.nextstarter.ai",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "berkelmas96@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes[`[data-theme=light]`]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
