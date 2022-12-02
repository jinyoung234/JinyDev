import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, colorTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import { RecoilRoot } from "recoil";
import { withNextRouter } from "@gogaille/storybook-addon-next-router";

const themes = [lightTheme, colorTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const decorators = [
  Story => (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
  withNextRouter({
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
