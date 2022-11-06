/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { ContentWrapper } from "../content/style";
import Footer from "../footer";
import NavBar from "../navbar";

const Layout: React.FC<any> = ({ children }) => {
  const [isLightMode] = useState(true);
  return (
    <>
      <NavBar />
      <ContentWrapper isLightMode={isLightMode}>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default Layout;
