import React from "react";
import useMovePage from "../../../hooks/useMovePage";
import { BlogCardProps } from "../../../interfaces/common";
import { BlogCardWrapper, BlogCardImageWrapper, BlogCardContentWrapper } from "./style";
import Tag from "../../common/tag";

/**
 * - 블로그 게시물을 `mdx file`의 `meta data`를 통해 카드 형태로 구성하였습니다.
 * - 게시물 `content`에는 `image, title, description, createdAt, tags로 구성` 되어 있습니다.
 * - blog를 누르면 `handleMovePage 함수`를 통해 `게시물 내부로 이동`합니다.
 * - categoryTag와 category를 통해 `해당 카테고리와 tag로 필터링 된 게시물`을 `사용자에게 제공`합니다.
 */
function BlogCard({ post, slug }: BlogCardProps) {
  const { handleMovePage } = useMovePage(slug);
  const { tags } = post;
  return (
    <BlogCardWrapper onClick={handleMovePage}>
      <BlogCardImageWrapper>
        <img src={post?.thumbnailUrl} alt="jinyoung" />
      </BlogCardImageWrapper>
      <BlogCardContentWrapper>
        <span>{post?.title}</span>
        <span>{post?.description}</span>
        <span>{post?.createdAt}</span>
        <Tag tags={tags} />
      </BlogCardContentWrapper>
    </BlogCardWrapper>
  );
}

BlogCard.defaultProps = {
  post: "mdx file의 meta data",
  slug: "mdxfile name(.mdx 제외)",
};

// 성능 최적화 작업 시 React.memo(Blog) 사용할 것
export default BlogCard;
