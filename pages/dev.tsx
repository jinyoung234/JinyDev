import React from "react";
import BlogList from "../components/blogList";
import Seo from "../components/seo";
import { PostsMapProps } from "../interfaces/common";
import getPost from "../utils/getPost";

export default function Dev({ posts }: PostsMapProps) {
  return (
    <>
      <Seo title="Dev" />
      <BlogList posts={posts} />;
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
