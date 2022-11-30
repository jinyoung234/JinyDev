import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, colorTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import { RecoilRoot } from "recoil";
import { RouterContext } from "next/dist/shared/lib/router-context";

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
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: "/", // defaults to `/`
    asPath: "/", // defaults to `/`
    query: {}, // defaults to `{}`
  },
};
