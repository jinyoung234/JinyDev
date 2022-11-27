import { FrontMatterProps } from "../../../interfaces/common";
import { TagContainer, TagWrapper } from "./style";

interface TagProps {
  post: FrontMatterProps;
}

export default function Tag({ post }: TagProps) {
  return (
    <TagContainer>
      <TagWrapper>
        <div>{post?.tags[0]}</div>
        <div>{post?.tags[1]}</div>
      </TagWrapper>
    </TagContainer>
  );
}
