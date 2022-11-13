import { getAllPost, getPost } from "../../utils/mdxParsing";
import { GetStaticPathProps, SlugProps } from "../../interfaces/common";
import PostTitle from "../../components/post/postTitle";
import PostContent from "../../components/post/postContent";
import { FrontMatterWrapper } from "../../components/post/postTitle/style";
import { PostContentWrapper } from "../../components/post/postContent/style";
import Seo from "../../components/seo";

export default function Slug({ data: frontMatter, mdxSource }: SlugProps) {
  return (
    <>
      <Seo title={frontMatter.title} />
      <FrontMatterWrapper>
        <PostTitle frontMatter={frontMatter} />
      </FrontMatterWrapper>
      <PostContentWrapper>
        <PostContent mdxSource={mdxSource} />
      </PostContentWrapper>
    </>
  );
}

export const getStaticProps = async ({ params }: GetStaticPathProps) => {
  const { mdxSource, data } = await getPost(params.slug);
  return {
    props: {
      mdxSource,
      data,
    },
  };
};

export async function getStaticPaths() {
  const paths = getAllPost().map(post => {
    return {
      params: {
        slug: post.slug.split("/"),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
