import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

// Layout 컴포넌트 props type
export interface LayoutProps {
  chlidren: React.ReactNode;
}

// Seo 컴포넌트 props type
export interface SeoProps {
  title: string;
}

// Blog 컴포넌트 -> BlogCategory 컴포넌트 props type
export interface BlogCategoryProps {
  category: string;
}

// mdx 파일에 있는 metadata type
export interface FrontMatterProps {
  title: string;
  createdAt: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  category: string;
}

// mdx 파일에서 가져온 data type
export interface PostsMapProps {
  [key: string]: {
    frontMatter: FrontMatterProps;
    slug: string;
  };
}

export interface PostsProps {
  frontMatter: FrontMatterProps;
  slug: string;
}

// Blog 컴포넌트 props type
export interface BlogProps {
  post: FrontMatterProps;
  slug: string;
}

// CategoryTag 컴포넌트 props type
export interface CategoryTagProps {
  tag: string;
}

// Slug page props type
export interface SlugProps {
  mdxSource: MDXRemoteSerializeResult;
  data: FrontMatterProps;
}

// Slug page getStaticPath type
export interface GetStaticPathProps {
  params: {
    slug: [];
  };
}

// CodeBlock Component type
export interface CodeProps {
  children: string;
  className: string;
}
