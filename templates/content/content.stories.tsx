/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Content from ".";
import styled from "styled-components";

const Container = styled.div`
  width: 1400px;
`;

export default {
  title: "templates/Content",
  component: Content,
  parameters: {
    componentSubtitle: "JinyDev Main Page Template",
  },
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};
