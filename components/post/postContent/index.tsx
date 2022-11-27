import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import { PostContentWrapper } from "./style";

interface PostContentProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
}

export default function PostContent({ mdxSource }: PostContentProps) {
  return (
    <PostContentWrapper>
      <MDXRemote {...mdxSource} />
    </PostContentWrapper>
  );
}
