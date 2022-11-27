import React from "react";
import useMovePage from "../../../../hooks/useMovePage";
import { BlogProps } from "../../../../interfaces/common";
import { BlogWrapper, BlogImageWrapper, BlogContentWrapper } from "./style";
import Tag from "../../../common/tag";

function Blog({ post, slug }: BlogProps) {
  const { handleMovePage } = useMovePage(slug);
  return (
    <BlogWrapper onClick={handleMovePage}>
      <BlogImageWrapper>
        <img src={post?.thumbnailUrl} alt="jinyoung" />
      </BlogImageWrapper>
      <BlogContentWrapper>
        <span>{post?.title}</span>
        <span>{post?.description}</span>
        <span>{post?.createdAt}</span>
        <Tag post={post} />
      </BlogContentWrapper>
    </BlogWrapper>
  );
}

// 성능 최적화 작업 시 React.memo(Blog) 사용할 것
export default Blog;
