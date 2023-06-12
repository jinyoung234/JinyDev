import Seo from "../components/common/seo";
import { BlogProps } from "../interfaces/common";
import Blog from "../templates/blog";
import getPost from "../utils/getPost";

export default function BlogPage({ posts }: BlogProps) {
  return (
    <>
      <Seo keywords={["개발자", "프론트엔드", "손진영"]} description="개발자로써의 이야기를 적는 공간" title="Blog" />
      <Blog posts={posts} />
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
