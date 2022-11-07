import styled from "styled-components";

export const TitleComponent = styled.div<{ isChangeMode: boolean }>`
  color: ${props => props.isChangeMode && props.theme.fontColor};
  padding: 1rem 0;
  p {
    font-size: 3rem;
    line-height: 1.4;
    font-weight: 600;
  }
  p:last-child span:first-child {
    color: ${props => props.theme.accentColor.fontColor};
  }
`;
