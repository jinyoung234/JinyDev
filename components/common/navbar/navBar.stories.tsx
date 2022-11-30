/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { withNextRouter } from "@gogaille/storybook-addon-next-router";
import styled from "styled-components";
import NavBar from ".";

const Container = styled.div`
  width: 100%;
`;

export default {
  title: "components/NavBar",
  component: NavBar,
  parameters: {
    componentSubtitle: "JinyDev의 Navigation Bar",
  },
  decorators: [
    withNextRouter({
      path: "/",
      asPath: "/",
      query: {},
      push() {},
    }),
  ],
};

export const Default = () => {
  return (
    <Container>
      <NavBar />
    </Container>
  );
};
