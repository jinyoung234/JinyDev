import styled from "styled-components";
import { displayAlignCenter, displaySpaceBetween } from "../../../styles/cssStyle";

export const NavContainer = styled.nav`
  margin: 0 18%;
  padding: 1.9rem 2.4rem;
  ${displaySpaceBetween}
  align-items: center;
  ul {
    ${displayAlignCenter}
  }
`;

export const NavLogoWrapper = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
`;

export const NavListContainer = styled.div`
  ul {
    ${displayAlignCenter}
  }
  li {
    padding: 0 1.2rem;
  }
`;

export const NavListWrapper = styled.ul<{ path: string }>`
  li:first-child {
    cursor: pointer;
  }
  a:nth-child(2) {
    color: ${props => (props.path === "/" ? props.theme.routeFontColor : props.theme.fontColor)};
  }
  a:nth-child(3) {
    color: ${props => (props.path === "/dev" ? props.theme.routeFontColor : props.theme.fontColor)};
  }
  a:last-child {
    color: ${props => (props.path === "/blog" ? props.theme.routeFontColor : props.theme.fontColor)};
  }
  li {
    font-size: 1.6rem;
    padding: 0 1.2rem;
  }
  svg {
    fill: ${props => props.theme.fontColor};
  }
  svg:hover {
    fill: #ffe100;
    transition: fill 0.2s ease-in-out;
  }
`;
