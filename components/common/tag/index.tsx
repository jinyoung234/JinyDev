import styled from "styled-components";
import { FrontMatterProps } from "../../../interfaces/common";

interface TagProps {
  post: FrontMatterProps;
}

const TagWrapper = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  div {
    line-height: 1.2;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.tagColor};
    box-shadow: ${props => props.theme.shadow.defaultShadow};
    border-radius: 0.8rem;
    padding: 0.6rem 1rem;
    font-weight: 500;
  }
  div:first-child {
    margin-right: 0.6rem;
  }
`;

export default function Tag({ post }: TagProps) {
  return (
    <TagWrapper>
      <div>{post?.tags[0]}</div>
      <div>{post?.tags[1]}</div>
    </TagWrapper>
  );
}
