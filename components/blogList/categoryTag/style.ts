import styled from "styled-components";

export const CategoryTagWrapper = styled.div<{ isChangeMode: boolean }>`
  width: 78%;
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 1.4rem;
  padding: 0.8rem 1.4rem;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadow.defaultShadow};
  :hover {
    background-color: ${props => (props.isChangeMode ? "#8AB633" : "#dee2e6")};
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
  }
`;
