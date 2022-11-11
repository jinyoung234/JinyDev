import Link from "next/link";
import React from "react";
import { BlogProps } from "../../../interfaces/common";
import { BlogWrapper } from "./style";

function Blog({ path, post, slug }: BlogProps) {
  return (
    <Link href={path === "dev" ? `/dev/${slug}` : `/blog/${slug}`}>
      <BlogWrapper>
        <div>
          <img src={post?.thumbnailUrl} alt="jinyoung" />
        </div>
        <div id="contentContainer">
          <span>{post.title}</span>
          <span>{post.description}</span>
          <span>{post.createdAt}</span>
          <div>
            <div>{post?.tags[0]}</div>
            <div>{post?.tags[1]}</div>
          </div>
        </div>
      </BlogWrapper>
    </Link>
  );
}

// 성능 최적화 작업 시 React.memo(Blog) 사용할 것
export default Blog;
