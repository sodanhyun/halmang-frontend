module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      color: {
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
  plugins: [],
};
