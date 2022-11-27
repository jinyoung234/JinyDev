import { PostProps } from "../../interfaces/common";
import PostContent from "./postContent";
import PostTitle from "./postTitle";
import { PostContentContainer, PostTitleContainer } from "./style";
import Toc from "./toc";
import Utterances from "./utterances";

export default function Post({ content, data: frontMatter, mdxSource }: PostProps) {
  return (
    <>
      <Toc content={content} />
      <PostTitleContainer>
        <PostTitle frontMatter={frontMatter} />
      </PostTitleContainer>
      <PostContentContainer>
        <PostContent mdxSource={mdxSource} />
        <Utterances />
      </PostContentContainer>
    </>
  );
}
