import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { changeMode } from "../../atoms";
import { CATEGORY_LIST } from "../../constants";
import { PostsMapProps, PostsProps } from "../../interfaces/common";
import Blog from "./blog";
import BlogCategory from "./blogCategory";
import CategoryTag from "./categoryTag";
import { BlogCategoryWrapper, BlogGridWrapper, BlogWrapper, CategoryTagListWrapper } from "./style";

export default function BlogList({ posts }: PostsMapProps) {
  const postsData = Array.from(Object.values(posts)) as unknown as PostsProps[];
  const tagList = Array.from(new Set(postsData.map(post => post.frontMatter.tags).flat()));
  const isChangeMode = useRecoilValue(changeMode);
  const [windowSize, setWindowSize] = useState<number | null>(null);
  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWindowSize(window.innerWidth));
    };
  }, [setWindowSize]);
  return (
    <BlogWrapper>
      <CategoryTagListWrapper>
        {tagList.map(tag => (
          <CategoryTag tag={tag} key={tag} />
        ))}
      </CategoryTagListWrapper>
      {windowSize && windowSize >= 1420 && (
        <BlogCategoryWrapper isChangeMode={isChangeMode}>
          <ul>
            Category
            {CATEGORY_LIST.map(category => (
              <BlogCategory key={category} category={category} />
            ))}
          </ul>
        </BlogCategoryWrapper>
      )}
      <BlogGridWrapper>
        {postsData.map(post => (
          <Blog key={post.frontMatter.title} post={post.frontMatter} />
        ))}
      </BlogGridWrapper>
    </BlogWrapper>
  );
}
