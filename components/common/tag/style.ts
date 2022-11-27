import styled from "styled-components";

export const TagWrapper = styled.div`
  div {
    background-color: ${props => props.theme.tagColor};
    box-shadow: ${props => props.theme.shadow.defaultShadow};
    border-radius: 0.8rem;
    font-weight: 500;
  }
`;

export const TagContainer = styled.div`
  ${TagWrapper} {
    padding: 1rem 0 0 0;
    display: flex;
    div {
      line-height: 1.2;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.6rem 1rem;
    }
    div:first-child {
      margin-right: 0.6rem;
    }
  }
`;
