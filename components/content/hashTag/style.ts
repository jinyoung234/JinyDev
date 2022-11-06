import styled from "styled-components";

export const HashTagComponent = styled.ul`
  padding: 1rem 0;
  ul > li:nth-child(odd) {
    font-size: 2.2rem;
    margin: 1.5rem 0;
    color: ${props => props.theme.accentColor.fontColor};
    font-weight: 600;
  }
  ul > li:nth-child(even) {
    font-size: 1.6rem;
  }
`;
