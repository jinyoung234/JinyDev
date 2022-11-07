/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import { changeMode } from "../../atoms";
import { GlobalStyle } from "../../styles/globalStyle";
import { colorTheme, lightTheme } from "../../styles/theme";
import { ContentWrapper } from "../content/style";
import Footer from "../footer";
import NavBar from "../navbar";

const Layout: React.FC<any> = ({ children }) => {
  const [isChangeMode, setIsChangeMode] = useRecoilState(changeMode);
  useEffect(() => {
    const persistTheme = localStorage.getItem("changeMode");
    if (typeof persistTheme === "string") {
      setIsChangeMode(JSON.parse(persistTheme));
    } else {
      setIsChangeMode(false);
    }
  }, []);
  return (
    <ThemeProvider theme={isChangeMode ? colorTheme : lightTheme}>
      <GlobalStyle />
      <NavBar />
      <ContentWrapper isChangeMode={isChangeMode}>{children}</ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
