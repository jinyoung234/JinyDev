import styled from "styled-components";

export const CategoryTagWrapper = styled.div<{ isChangeMode: boolean }>`
  width: 8rem;
  background-color: ${props => props.theme.accentColor.contentColor};
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadow.defaultShadow};
  :hover {
    background-color: ${props => (props.isChangeMode ? "#8AB633" : "#dee2e6")};
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
  }
  span {
    line-height: 1.3;
    font-size: 1.2rem;
    text-align: center;
    word-break: keep-all;
    color: ${props => props.isChangeMode && props.theme.fontColor};
  }
`;
