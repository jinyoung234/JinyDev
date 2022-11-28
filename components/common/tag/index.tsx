import { TagProps } from "../../../interfaces/common";
import { TagContainer, TagWrapper } from "./style";

/**
 * - `PostTitle, BlogCard 컴포넌트에 사용`되는 컴포넌트 입니다.
 * - `PostTitle과 BlogCard 컴포넌트의 목적`에 맞게 `font size를 조정`하였습니다.
 * - `태그 안에 들어가는 내용`은 `블로그 주제`와 관련되어 있습니다.
 * - `컴포넌트의 props`인 `tags`는 `mdx fiie에 있는 yaml meta data` 입니다.
 */
function Tag({ tags }: TagProps) {
  return (
    <TagContainer>
      <TagWrapper>
        <div>{tags[0]}</div>
        <div>{tags[1]}</div>
      </TagWrapper>
    </TagContainer>
  );
}

Tag.defaultProps = {
  tags: "ex) [TypeScript, Next.js]",
};

export default Tag;
