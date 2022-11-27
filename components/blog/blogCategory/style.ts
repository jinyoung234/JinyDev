import styled from "styled-components";

export const BlogCategoryWrapper = styled.li<{ isChangeMode: boolean }>`
  font-size: 1.3rem;
  font-weight: 300;
  :hover {
    color: ${props => (props.isChangeMode ? "#8AB633" : "#868e96")};
    transition: color 0.2s ease-in-out;
  }
`;
