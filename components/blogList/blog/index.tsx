import React from "react";
import useMovePage from "../../../hooks/useMovePage";
import { BlogProps } from "../../../interfaces/common";
import { BlogWrapper } from "./style";
import Tag from "./tag";

function Blog({ post, slug }: BlogProps) {
  const { handleMovePage } = useMovePage(slug);
  return (
    <BlogWrapper onClick={handleMovePage}>
      <div>
        <img src={post?.thumbnailUrl} alt="jinyoung" />
      </div>
      <div id="contentContainer">
        <span>{post.title}</span>
        <span>{post.description}</span>
        <span>{post.createdAt}</span>
        <Tag post={post} />
      </div>
    </BlogWrapper>
  );
}

// 성능 최적화 작업 시 React.memo(Blog) 사용할 것
export default Blog;
