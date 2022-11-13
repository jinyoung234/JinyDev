import styled from "styled-components";

export const BlogWrapper = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.accentColor.contentColor};
  color: ${props => props.theme.fontColor};
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadow.defaultShadow};
  word-break: keep-all;
  border-radius: 2rem;
  div:first-child > img {
    width: 100%;
    height: 16rem;
    border-radius: 2rem 2rem 0rem 0rem;
  }
  #contentContainer {
    display: flex;
    flex-direction: column;
    padding: 1.4rem 1.4rem;
  }
  span:first-child {
    font-size: 1.9rem;
    margin-bottom: 1.3rem;
    font-weight: 600;
  }
  span:nth-child(2) {
    font-size: 1.3rem;
    margin-bottom: 5rem;
  }
`;
