import styled from "styled-components";

export const FrontMatterWrapper = styled.div`
  padding: 3rem 20.5% 0 19.8%;
  color: black;
  font-size: 1.4rem;
  #frontmatter {
    display: flex;
    flex-direction: column;
    #category {
      font-size: 1.6rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }
    #title {
      font-size: 3rem;
      font-weight: 600;
    }
    #createdAt {
      font-size: 1.4rem;
      margin: 2rem 0 1rem 0;
    }
    #createdAt + div {
      color: ${props => props.theme.fontColor};
    }
    img {
      padding: 3rem 0;
      width: 100%;
    }
  }
`;

export const SlugWrapper = styled.article`
  padding: 0 20.5% 3rem 19.8%;
  color: black;
  font-size: 1.4rem;
  h1 {
    font-size: 3.6rem;
  }
  h2 {
    font-size: 2.4rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 2rem;
    margin: 2rem 0;
  }
  h4 {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
    line-height: 2.5rem;
  }
  hr {
    border-style: solid;
    color: ${props => props.theme.indexColor};
  }
  p {
    word-wrap: break-word;
    line-height: 2.5rem;
    code {
      background-color: ${props => props.theme.codeColor};
      color: ${props => props.theme.fontColor};
      padding: 0.2rem 0.6rem;
      border-radius: 0.6rem;
      font-weight: 600;
      margin: 0 0.2rem;
    }
  }
  blockquote {
    border-radius: 1rem;
    margin: 2rem 0;
    background-color: ${props => props.theme.headerColor};
    border-left: 0.5rem solid ${props => props.theme.accentColor.contentColor};
    padding: 0.8rem;
  }
  ul,
  ol {
    font-size: 1.6rem;
    li {
      margin: 1rem 0;
      padding-left: 1.5rem;
      position: relative;
      line-height: 2.5rem;
      &::before {
        content: " ";
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 0.25rem;
        background-color: #000000;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0.25rem;
        margin: auto 0;
      }
    }
  }
`;
