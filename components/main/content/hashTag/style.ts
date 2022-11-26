import styled from "styled-components";

export const HashTagWrapper = styled.ul`
  letter-spacing: 0.08rem;
  li:nth-child(odd) {
    font-size: 2.2rem;
    color: ${props => props.theme.accentColor.fontColor};
    font-weight: 600;
  }
  li:nth-child(even) {
    font-size: 1.6rem;
  }
`;

export const HashTagContainer = styled.div`
  padding: 1rem 0;
  ${HashTagWrapper} {
    li:nth-child(odd) {
      margin: 1.5rem 0;
    }
  }
`;
