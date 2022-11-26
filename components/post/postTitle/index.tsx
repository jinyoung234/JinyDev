import React from "react";
import { FrontMatterProps } from "../../../interfaces/common";
import Tag from "../../common/tag";

export interface PostTitleProps {
  frontMatter: FrontMatterProps;
}

export default function PostTitle({ frontMatter }: PostTitleProps) {
  return (
    <div id="frontmatter">
      <p id="category">{frontMatter.category}</p>
      <p id="title">{frontMatter.title}</p>
      <p id="createdAt">{frontMatter.createdAt.split(" ")[0]}</p>
      <Tag post={frontMatter} />
      <img src={frontMatter.thumbnailUrl} alt="jinyoung" />
    </div>
  );
}
