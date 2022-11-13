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
