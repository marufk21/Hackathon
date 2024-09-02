/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dphigreen: "#44924c",
        silver: {
          "100": "#c4c4c4",
          "200": "#b7b7b7",
        },
        "gray-1": "#333",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#eee",
          "300": "#ededed",
          "400": "#ececec",
          "500": "#eaeaea",
        },
        gainsboro: {
          "100": "#dde6ed",
          "200": "#d9d9d9",
        },
        dimgray: "#666",
        gray: "#808080",
        ghostwhite: {
          "100": "#f8f9fd",
          "200": "#f2f4ff",
          "300": "rgba(248, 249, 253, 0.49)",
        },
        black: "#000",
        "grey-k900-dark-grey": "#222",
        mintcream: "#f1faf5",
        darkslategray: {
          "100": "#454545",
          "200": "#444",
          "300": "#003145",
          "400": "#002a3b",
        },
        orangered: "rgba(255, 60, 0, 0.17)",
        seagreen: "rgba(68, 146, 76, 0.24)",
        "gray-2": "#4f4f4f",
        goldenrod: {
          "100": "#ffce5c",
          "200": "rgba(242, 201, 76, 0.25)",
        },
        b400: "#858585",
        slategray: "#64607d",
        red: "#dc1414",
      },
      spacing: {},
      fontFamily: {
        "body-b3-regular": "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        xl: "20px",
        "11xl": "30px",
        "10xs": "3px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      xs: "12px",
      "3xs": "10px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
