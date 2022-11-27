import styled from "styled-components";
import { PostTitleWrapper } from "./postTitle/style";

export const PostTitleContainer = styled.div`
  padding: 3rem 20.5% 0 19.8%;
  ${PostTitleWrapper} {
    display: flex;
    flex-direction: column;
  }
`;

export const PostContentContainer = styled.article`
  padding: 3rem 20.5% 0 19.8%;
`;
