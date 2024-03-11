module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      screens: {
        mb: "1090px",
      },
      fontSize: {
        "2xs": ["10px", "16px"],
      },
      spacing: {
        "4xs": "4px",
        "3xs": "8px",
        "2xs": "12px",

        xs: "16px",
        s: "24px",
        md: "32px",
        xl: "48px",
      },
      borderRadius: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        pill: 500,
        none: 0,
      },
      colors: {
        content: {
          brand: "#3E00FA",
          "on-brand": "#FFFFFF",
          disabled: "#0000004D",
          secondary: "#64748B",
          primary: "#020617",
          invert: "#FFFFFF",
          "invert-secondary": "#FFFFFFBF",
          "invert-disabled": "#FFFFFF66",
          error: "#EF4444",
          "on-error": "#FEF2F2",
          warning: "#EAB308",
          "on-warning": "#713F12",
          success: "#10B981",
          "on-success": "#ECFDF5",
          info: "#3B82F6",
          "on-info": "#EFF6FF",
        },
        surface: {
          "brand-subdued": "#F8FAFC",
          "on-brand-hover": "#FFFFFF1A",
          "on-brand-press": "#FFFFFF33",
          "brand-hover": "#3E00FA0D",
          "brand-press": "#3E00FA1A",
          press: "#0000000D",
          hover: "#00000008",
          disabled: "#F1F5F9",
          secondary: "#F1F5F9",
          primary: "#FFFFFF",
          invert: "#020617",
          "invert-secondary": "#1E293B",
          "invert-disabled": "#334155",
          "invert-hover": "#FFFFFF26",
          "invert-press": "#FFFFFF40",
          error: "#EF4444",
          "error-subdued": "#FEF2F2",
          "on-error-hover": "#00000026",
          "on-error-press": "#00000040",
          "error-hover": "#EF44441A",
          "error-press": "#EF444426",
          warning: "#EAB308",
          "warning-subdued": "#FEFCE8",
          "on-warning-hover": "#FFFFFF33",
          "on-warning-press": "#FFFFFF59",
          "warning-hover": "#EAB30826",
          "warning-press": "#EAB3084D",
          success: "#10B981",
          "success-subdued": "#ECFDF5",
          "on-success-hover": "#00000026",
          "on-success-press": "#00000040",
          "success-hover": "#10B9811A",
          "success-press": "#10B98126",
          info: "#3B82F6",
          "info-subdued": "#EFF6FF",
          "on-info-hover": "#00000026",
          "on-info-press": "#00000040",
          "info-hover": "#3B82F61A",
          "info-press": "#3B82F633",
          brand: "#3E00FA",
          background: "#FFFFFF",
          overlay: "#000000BF",

          // DOCS
          "sidebar-background": "#212121",
          "docs-content-background": "#0F0F0F",
        },
        border: {
          success: "#10B981",
          info: "#60A5FA",
          warning: "#FACC15",
          error: "#F87171",
          brand: "#3E00FA",
          secondary: "#00000033",
          subdued: "#0000001A",
          primary: "#00000066",
          invert: "#FFFFFF40",
          disabled: "#0000000D",
          "brand-alt": "#3E00FA",
          divider: "#0000001A",
          "invert-disabled": "#FFFFFF1A",
        },
      },
      boxShadow: {
        popover: "0px 4px 8px 0px rgba(190, 190, 190, 0.16)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3E00FA",
          "base-100": "#F8FAFC",
          "base-200": "white",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#3E00FA",
          "base-100": "#14161D",
          "base-200": "#191B23",
        },
      },
    ],
  },
};
