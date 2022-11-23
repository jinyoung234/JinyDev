import styled from "styled-components";
import { TocItemProps } from "../../../interfaces/common";
import media from "../../../styles/media";

export const Container = styled.div`
  display: none;
  position: fixed;
  right: 30px;
  max-width: 24rem;
  margin-top: 20vh;
  margin-right: 0.5rem;
  background-color: white;
  padding: 3rem 4rem 3rem 3rem;
  border-radius: 2rem;
  ul {
    display: flex;
    flex-direction: column;
  }
  ${media.xlarge} {
    display: block;
  }
  ${media.xxlarge} {
    margin-right: 20rem;
  }
`;

export const Item = styled.li<TocItemProps>`
  color: black;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5rem;
  padding-left: ${({ depth }) => (depth ? `${depth}rem` : "0rem")};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.accentColor.contentColor : "inherit")};
  border-radius: 0.5rem;
  transform: ${({ isSelected }) => isSelected && "scale(1.05)"};
  transform-origin: left;
  transition: all 0.3s;
`;
