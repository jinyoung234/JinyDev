import styled from "styled-components";
import { displayAlignCenter, displayColumn } from "../../styles/cssStyle";

export const ContentContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 8.2rem - 6.9rem);
`;

export const ContentSectionContainer = styled.section`
  width: 50%;
  padding: 7rem 0;
  background-color: ${props => props.theme.bgColor};
  :first-child {
    margin-left: 20%;
    ${displayColumn}
    justify-content: center;
  }
  :last-child {
    margin-right: 20%;
    ${displayAlignCenter}
    justify-content: flex-end;
  }
`;

export const ContentImgWrapper = styled.img`
  width: 31rem;
  height: 31rem;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadow.defaultShadow};
`;
