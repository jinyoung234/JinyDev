/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { changeMode } from "../../../atoms";
import { useSsrComplectedState } from "../../../hooks/useSsrComplectedState";
import { GlobalStyle } from "../../../styles/globalStyle";
import { colorTheme, lightTheme } from "../../../styles/theme";
import Footer from "../footer";
import NavBar from "../navbar";
import { LayoutWrapper } from "./style";

const Layout: React.FC<any> = ({ children }) => {
  const isChangeMode = useRecoilValue(changeMode);
  const setSsrCompleted = useSsrComplectedState();
  useEffect(() => {
    setSsrCompleted();
  }, [setSsrCompleted]);
  return (
    <ThemeProvider theme={isChangeMode ? colorTheme : lightTheme}>
      <GlobalStyle />
      <NavBar />
      <LayoutWrapper isChangeMode={isChangeMode}>{children}</LayoutWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
