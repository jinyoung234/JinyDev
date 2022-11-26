import styled from "styled-components";

export const HashTagWrapper = styled.div`
  padding: 1rem 0;
`;

export const HashTagListWrapper = styled.ul`
  li:nth-child(odd) {
    font-size: 2.2rem;
    margin: 1.5rem 0;
    color: ${props => props.theme.accentColor.fontColor};
    font-weight: 600;
  }
  li:nth-child(even) {
    font-size: 1.6rem;
  }
`;
