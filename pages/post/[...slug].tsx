import { getAllPost, getPost } from "../../utils/mdxParsing";
import { GetStaticPathProps, SlugProps } from "../../interfaces/common";
import PostTitle from "../../components/post/postTitle";
import PostContent from "../../components/post/postContent";
import { FrontMatterWrapper } from "../../components/post/postTitle/style";
import { PostContentWrapper } from "../../components/post/postContent/style";
import Seo from "../../components/seo";
import Toc from "../../components/post/toc";

export default function Slug({ data: frontMatter, mdxSource, content }: SlugProps) {
  return (
    <>
      <Seo title={frontMatter.title} />
      <Toc content={content} />
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
  const { mdxSource, data, content } = await getPost(params.slug);
  return {
    props: {
      mdxSource,
      data,
      content,
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
