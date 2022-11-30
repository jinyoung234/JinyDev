/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import Footer from ".";
import { withNextRouter } from "@gogaille/storybook-addon-next-router";

const Container = styled.div`
  width: 100%;
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
  title: "components/Footer",
  component: Footer,
  parameters: {
    componentSubtitle: "JinyDev의 Footer",
  },
  decorators: [withNextRouter],
};

export const Default = () => {
  return (
    <Container>
      <Footer />
    </Container>
  );
};
