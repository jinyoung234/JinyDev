/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MainPage from "./main/MainPage";
import { withNextRouter } from "@gogaille/storybook-addon-next-router";
import styled from "styled-components";

const Container = styled.div`
  width: 1400px;
  footer {
    svg {
      width: 30px;
      height: 30px;
      margin: 0px 8px;
    }
    svg:first-child {
      padding-top: 2px;
    }
    svg:nth-child(2) {
      width: 28px;
    }
    svg:last-child {
      width: 24px;
      margin: 0px 12px;
      padding-top: 2px;
    }
  }
`;

export default {
  title: "Pages/Main Page",
  component: MainPage,
  parameters: {
    componentSubtitle: "JinyDev Main Page",
  },
  decorators: [withNextRouter],
};

export const Default = () => {
  return (
    <Container>
      <MainPage />
    </Container>
  );
};
