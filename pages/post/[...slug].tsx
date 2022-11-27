import { getAllPost, getPost } from "../../utils/mdxParsing";
import { GetStaticPathProps, PostProps } from "../../interfaces/common";
import Seo from "../../components/common/seo";
import Post from "../../components/post";

export default function Slug({ data: frontMatter, mdxSource, content }: PostProps) {
  const { title, description, tags } = frontMatter;
  return (
    <>
      <Seo keywords={tags} description={description} title={title} />
      <Post data={frontMatter} mdxSource={mdxSource} content={content} />
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
