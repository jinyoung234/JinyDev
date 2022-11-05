import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { lightTheme } from "../styles/theme";

export default function Layout({ chlidren }: React.ComponentProps<any>) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {chlidren}
    </ThemeProvider>
  );
}
