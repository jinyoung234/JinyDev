import { getAllPost, getPost } from "../../utils/mdxParsing";
import { MDXRemote } from "next-mdx-remote";
import Tag from "../../components/blogList/blog/tag";
import { FrontMatterWrapper, SlugWrapper } from "../../components/post/style";
import { GetStaticPathProps, SlugProps } from "../../interfaces/common";

export default function Slug({ data: frontMatter, mdxSource }: SlugProps) {
  return (
    <>
      <FrontMatterWrapper>
        <div id="frontmatter">
          <p id="title">{frontMatter.title}</p>
          <p id="createdAt">{frontMatter.createdAt.split(" ")[0]}</p>
          <Tag post={frontMatter} />
          <img src={frontMatter.thumbnailUrl} alt="jinyoung" />
        </div>
      </FrontMatterWrapper>
      <SlugWrapper>
        <MDXRemote {...mdxSource} />
      </SlugWrapper>
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
