import styled from "styled-components";

export const CategoryTagWrapper = styled.div<{ isChangeMode: boolean }>`
  text-align: center;
  word-break: keep-all;
  width: 8rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.accentColor.contentColor};
  color: ${props => props.isChangeMode && props.theme.fontColor};
  font-size: 1.2rem;
  padding: 0.4rem 0;
  border-radius: 1rem;
  line-height: 1.3;
  box-shadow: ${props => props.theme.shadow.defaultShadow};
  :hover {
    background-color: ${props => (props.isChangeMode ? "#8AB633" : "#dee2e6")};
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
  }
`;
