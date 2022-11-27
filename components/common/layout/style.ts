import styled from "styled-components";

export const LayoutWrapper = styled.div<{ isChangeMode: boolean }>`
  background-color: ${props => props.theme.bgColor};
  min-height: calc(100vh - 8.2rem - 6.9rem);
`;
