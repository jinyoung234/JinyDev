import React from "react";
import { PostTitleProps } from "../../../interfaces/common";
import Tag from "../../common/tag";
import { PostTitleWrapper } from "./style";

/**
 * > `mdx file meta data 기반으로 생성`되는 `컴포넌트` 입니다.
 *
 * > `카테고리, 제목, 생성일자, 태그, 이미지로 구성`되어 있습니다.
 *
 */
function PostTitle({ frontMatter }: PostTitleProps) {
  return (
    <PostTitleWrapper>
      <p id="category">{frontMatter.category}</p>
      <p id="title">{frontMatter.title}</p>
      <p id="createdAt">{frontMatter.createdAt.split(" ")[0]}</p>
      <Tag tags={frontMatter.tags} />
      <img src={frontMatter.thumbnailUrl} alt="jinyoung" />
    </PostTitleWrapper>
  );
}

PostTitle.defaultProps = {
  frontMatter: "mdx file meta data",
};

export default PostTitle;
