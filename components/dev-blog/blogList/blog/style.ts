import styled from "styled-components";

export const BlogWrapper = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.accentColor.contentColor};
  color: ${props => props.theme.fontColor};
  box-shadow: ${props => props.theme.shadow.defaultShadow};
  word-break: keep-all;
  border-radius: 2rem;
`;

export const BlogImageWrapper = styled.div`
  img {
    width: 100%;
    height: 16rem;
    border-radius: 2rem 2rem 0rem 0rem;
    background-position: center;
    object-fit: cover;
  }
`;

export const BlogContentWrapper = styled.div`
  span:first-child {
    font-size: 1.9rem;
    font-weight: 600;
  }
  span:nth-child(2) {
    font-size: 1.3rem;
  }
`;
