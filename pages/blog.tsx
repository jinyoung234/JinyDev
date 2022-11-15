import BlogList from "../components/blogList";
import Seo from "../components/seo";
import { PostsMapProps } from "../interfaces/common";
import getPost from "../utils/getPost";

export default function Blog({ posts }: PostsMapProps) {
  return (
    <>
      <Seo title="Blog" />
      <BlogList posts={posts} />;
    </>
  );
}

export async function getStaticProps() {
  const { posts } = getPost("blog");
  return {
    props: {
      posts,
    },
  };
}
