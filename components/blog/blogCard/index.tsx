import React from "react";
import useMovePage from "../../../hooks/useMovePage";
import { BlogCardProps } from "../../../interfaces/common";
import { BlogCardWrapper, BlogCardImageWrapper, BlogCardContentWrapper } from "./style";
import Tag from "../../common/tag";

function BlogCard({ post, slug }: BlogCardProps) {
  const { handleMovePage } = useMovePage(slug);
  return (
    <BlogCardWrapper onClick={handleMovePage}>
      <BlogCardImageWrapper>
        <img src={post?.thumbnailUrl} alt="jinyoung" />
      </BlogCardImageWrapper>
      <BlogCardContentWrapper>
        <span>{post?.title}</span>
        <span>{post?.description}</span>
        <span>{post?.createdAt}</span>
        <Tag post={post} />
      </BlogCardContentWrapper>
    </BlogCardWrapper>
  );
}

// 성능 최적화 작업 시 React.memo(Blog) 사용할 것
export default BlogCard;
