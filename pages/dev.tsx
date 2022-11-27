import React from "react";
import Blog from "../components/blog";
import Seo from "../components/common/seo";
import { BlogProps } from "../interfaces/common";
import getPost from "../utils/getPost";

export default function DevPage({ posts }: BlogProps) {
  return (
    <>
      <Seo
        title="Dev"
        description="프론트엔드 지망생 손진영의 개발 블로그"
        keywords={["개발", "프론트엔드", "손진영", "진영", "개발자", "frontend", "React", "Nextjs", "TypeScript"]}
      />
      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const { posts } = getPost("dev");
  return {
    props: {
      posts,
    },
  };
}
