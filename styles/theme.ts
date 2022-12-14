import { DefaultTheme } from "styled-components";

const defaultTheme = {
  shadow: {
    defaultShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    buttonShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
};

const lightTheme: DefaultTheme = {
  ...defaultTheme,
  fontColor: "#000000",
  routeFontColor: "#D9D9D9",
  headerColor: "#ffffff",
  accentColor: {
    fontColor: "#122650",
    contentColor: "#F9F9F9",
  },
  bgColor: "#F1F1F1",
  tagColor: "#ffffff",
  indexColor: {
    fontColor: "#000000",
    bgColor: "#ffffff",
  },
  codeColor: "#ECECEC",
};

const colorTheme: DefaultTheme = {
  ...defaultTheme,
  fontColor: "#ffffff",
  routeFontColor: "#DABA91",
  headerColor: "#F2E9E6",
  accentColor: {
    fontColor: "#FBE8C3",
    contentColor: "#D5EEAC",
  },
  bgColor: "#DABA91",
  tagColor: "#8AB633",
  indexColor: {
    fontColor: "#000000",
    bgColor: "ffffff",
  },
  codeColor: "#8AB633",
};

export { lightTheme, colorTheme };
