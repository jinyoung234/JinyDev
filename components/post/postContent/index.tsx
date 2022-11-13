import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface PostContentProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
}

export default function PostContent({ mdxSource }: PostContentProps) {
  return <MDXRemote {...mdxSource} />;
}
