import styled from "styled-components";
import { displayAlignCenter, displayColumn } from "../../../styles/cssStyle";

export const ContentLayoutWrapper = styled.div<{ isChangeMode: boolean }>`
  background-color: ${props => props.theme.bgColor};
  min-height: calc(100vh - 8.2rem - 6.9rem);
`;

export const ContentWrapper = styled(ContentLayoutWrapper)`
  display: flex;
  letter-spacing: 0.08rem;
  section {
    width: 50%;
    padding: 7rem 0;
  }
  section:first-child {
    margin-left: 20%;
    ${displayColumn}
    justify-content: center;
  }
  section:last-child {
    margin-right: 20%;
    ${displayAlignCenter}
    justify-content: flex-end;
  }
  section > img {
    width: 31rem;
    height: 31rem;
    border-radius: 50%;
    box-shadow: ${props => props.theme.shadow.defaultShadow};
  }
`;
