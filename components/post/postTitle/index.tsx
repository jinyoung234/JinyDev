import React from "react";
import { FrontMatterProps } from "../../../interfaces/common";
import Tag from "../../common/tag";
import { PostTitleWrapper } from "./style";

export interface PostTitleProps {
  frontMatter: FrontMatterProps;
}

export default function PostTitle({ frontMatter }: PostTitleProps) {
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
