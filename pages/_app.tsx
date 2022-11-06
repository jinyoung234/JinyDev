/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */
import { NextPage } from "next";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { colorTheme, lightTheme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
