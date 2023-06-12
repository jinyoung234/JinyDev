import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

export interface TitleProps {
  /** 희망하는 직무 */
  jobContent: string;
  /** 강조하고 싶은 말 */
  accentContent: string;
  /** 이름 */
  name: string;
}

/* Common Interface*/
// Layout 컴포넌트 props type
export interface LayoutProps {
  chlidren: React.ReactNode;
}

// Seo 컴포넌트 props type
export interface SeoProps {
  title: string;
  description: string;
  keywords: string[];
}

// Tag, PostTitle 컴포넌트 props type(mdx 파일에 있는 metadata type)
export interface FrontMatterProps {
  frontMatter: FrontMatterProps;
  title: string;
  createdAt: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  category: string;
}

export interface TagProps {
  /** mdxFile `meta data`(tags) */
  tags: string[];
}
/* !Common Interface*/

/* Dev & Blog Page Interface */
// Dev & Blog page & BlogTemplate 컴포넌트 props Type(mdx 파일에서 가져온 data type)
export interface BlogProps {
  [key: string]: {
    frontMatter: FrontMatterProps;
    slug: string;
  };
}

// Blog List 컴포넌트 postsData type
export interface PostsProps {
  frontMatter: FrontMatterProps;
  slug: string;
}

// BlogCategory 컴포넌트 props type
export interface BlogCategoryProps {
  /** 카테고리 이름 */
  categoryData: string;
  /** 게시물 총 개수 */
  count: number;
}

// CategoryTag 컴포넌트 props type
export interface CategoryTagProps {
  /** tag name */
  tag: string;
}

// BlogCard 컴포넌트 props type
export interface BlogCardProps {
  /** mdx file의 meta data */
  post: FrontMatterProps;
  /** mdx file의 file name(.mdx 제외) */
  slug: string;
}
/* !Dev & Blog page Interface*/

/* Slug page Interface*/
// Slug page & Post Template props type
export interface PostProps {
  content: string;
  data: FrontMatterProps;
  mdxSource: MDXRemoteSerializeResult;
}

// Slug page getStaticPath type
export interface GetStaticPathProps {
  params: {
    slug: [];
  };
}

// CodeBlock Component props type
export interface CodeBlockProps {
  /** codeblock 내 content */
  children: string;
  /** content의 langauge */
  className: string;
}

// PostTitle Component props type
export interface PostTitleProps {
  /** mdx file meta data */
  frontMatter: FrontMatterProps;
}

// Toc Component type
export interface TocProps {
  content: string;
}

export interface TocItemProps {
  depth: number;
  isSelected: boolean;
}
/* !Slug page Interface*/
