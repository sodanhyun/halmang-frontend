module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      boxShadow: {
        toast: "2px 2px 4px 0px rgba(158, 158, 158, 0.16)",
      },

      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      gridTemplateAreas: {
        layout: ["header header header header", "main main main main", "nav nav nav nav"],
        stream: ["line content"],
      },

      gridTemplateColumns: {
        layout: "1fr 1fr 1fr 1fr",
        stream: "auto 1fr",
      },

      gridTemplateRows: {
        layout: "auto 1fr auto",
      },

      colors: {
        // NOTE: primary-brown
        "primary-brown-50": "#f8f6f4",
        "primary-brown-100": "#f2efeb",
        "primary-brown-200": "#ddd5cb",
        "primary-brown-300": "#c7b9aa",
        "primary-brown-400": "#b09987",
        "primary-brown-500": "#a0836f",
        "primary-brown-600": "#937463",
        "primary-brown-700": "#7a5f54",
        "primary-brown-800": "#644f48",
        "primary-brown-900": "#52413c",
        "primary-brown-950": "#2b211f",

        // NOTE: secondary-brown
        "secondary-brown-50": "#f6f7f9",
        "secondary-brown-100": "#ecedf2",
        "secondary-brown-200": "#d4d7e3",
        "secondary-brown-300": "#afb4ca",
        "secondary-brown-400": "#838cad",
        "secondary-brown-500": "#646d93",
        "secondary-brown-600": "#4f567a",
        "secondary-brown-700": "#414763",
        "secondary-brown-800": "#383c54",
        "secondary-brown-900": "#303344",
        "secondary-brown-950": "#22242f",
        "secondary-brown-950/80%": "#2A2A35",

        // NOTE: gray scale
        white: "#FFFFFF",
        "line-50": "#F5F5F5",
        "line-100": "#E4E4E4",
        "line-200": "#D9D9D9",
        background: "#FBFAF9",
        "text-50": "#BDBDBD",
        "text-100": "#9E9E9E",
        "text-200": "#616161",
        "text-300": "#3D3D3D",
        "text-400": "#222222",

        // NOTE:

        "illustration-yellow": "#F4B756",
        "illustration-red": "#FB735E",
        "illustration-orange": "#FF891D",
        "blue-50": "#F6F6F9",
        "blue-950": "#2A2A35",
        "gray-200": "#D9D9D9",
      },

      fontSize: {
        // NOTE: title1
        title1Bold: ["32px", { lineHeight: "44px", fontWeight: "700" }],
        title1SemiBold: ["32px", { lineHeight: "44px", fontWeight: "600" }],
        title1Medium: ["32px", { lineHeight: "44px", fontWeight: "500" }],
        title1Regular: ["32px", { lineHeight: "44px", fontWeight: "400" }],
        title1Light: ["32px", { lineHeight: "44px", fontWeight: "300" }],

        // NOTE: title2
        title2Bold: ["26px", { lineHeight: "34px", fontWeight: "700" }],
        title2SemiBold: ["26px", { lineHeight: "34px", fontWeight: "600" }],
        title2Medium: ["26px", { lineHeight: "34px", fontWeight: "500" }],
        title2Regular: ["26px", { lineHeight: "34px", fontWeight: "400" }],
        title2Light: ["26px", { lineHeight: "34px", fontWeight: "300" }],

        // NOTE: heading1
        heading1Bold: ["24px", { lineHeight: "32px", fontWeight: "700" }],
        heading1SemiBold: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        heading1Medium: ["24px", { lineHeight: "32px", fontWeight: "500" }],
        heading1Regular: ["24px", { lineHeight: "32px", fontWeight: "400" }],
        heading1Light: ["24px", { lineHeight: "32px", fontWeight: "300" }],

        // NOTE: heading2
        heading2Bold: ["22px", { lineHeight: "28px", fontWeight: "700" }],
        heading2SemiBold: ["22px", { lineHeight: "28px", fontWeight: "600" }],
        heading2Medium: ["22px", { lineHeight: "28px", fontWeight: "500" }],
        heading2Regular: ["22px", { lineHeight: "28px", fontWeight: "400" }],
        heading2Light: ["22px", { lineHeight: "28px", fontWeight: "300" }],

        // NOTE: body1
        body1Bold: ["20px", { lineHeight: "20px", fontWeight: "700" }],
        body1SemiBold: ["20px", { lineHeight: "20px", fontWeight: "600" }],
        body1Medium: ["20px", { lineHeight: "20px", fontWeight: "500" }],
        body1Regular: ["20px", { lineHeight: "20px", fontWeight: "400" }],
        body1Light: ["20px", { lineHeight: "20px", fontWeight: "300" }],

        // NOTE: body2
        body2Bold: ["18px", { lineHeight: "24px", fontWeight: "700" }],
        body2SemiBold: ["18px", { lineHeight: "24px", fontWeight: "600" }],
        body2Medium: ["18px", { lineHeight: "24px", fontWeight: "500" }],
        body2Regular: ["18px", { lineHeight: "24px", fontWeight: "400" }],
        body2Light: ["18px", { lineHeight: "24px", fontWeight: "300" }],

        // NOTE: body3
        body3Bold: ["16px", { lineHeight: "20px", fontWeight: "700" }],
        body3SemiBold: ["16px", { lineHeight: "20px", fontWeight: "600" }],
        body3Medium: ["16px", { lineHeight: "20px", fontWeight: "500" }],
        body3Regular: ["16px", { lineHeight: "20px", fontWeight: "400" }],
        body3Light: ["16px", { lineHeight: "20px", fontWeight: "300" }],

        // NOTE: label
        labelBold: ["14px", { lineHeight: "20px", fontWeight: "700" }],
        labelSemiBold: ["14px", { lineHeight: "20px", fontWeight: "600" }],
        labelMedium: ["14px", { lineHeight: "20px", fontWeight: "500" }],
        labelRegular: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        labelLight: ["14px", { lineHeight: "20px", fontWeight: "300" }],

        // NOTE: caption
        captionBold: ["12px", { lineHeight: "18px", fontWeight: "700" }],
        captionSemiBold: ["12px", { lineHeight: "18px", fontWeight: "600" }],
        captionMedium: ["12px", { lineHeight: "18px", fontWeight: "500" }],
        captionRegular: ["12px", { lineHeight: "18px", fontWeight: "400" }],
        captionLight: ["12px", { lineHeight: "18px", fontWeight: "300" }],
      },
      fontFamily: {
        pretendard: ["pretendard", "sans-serif"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas"), require("daisyui")],
};
