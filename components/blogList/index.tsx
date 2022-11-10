/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { changeMode, initializeAtom, isCategoryAtom, tagNameAtom } from "../../atoms";
import { CATEGORY_LIST } from "../../constants";
import { PostsMapProps, PostsProps } from "../../interfaces/common";
import Blog from "./blog";
import BlogCategory from "./blogCategory";
import CategoryTag from "./categoryTag";
import { BlogCategoryWrapper, BlogGridWrapper, BlogWrapper, CategoryTagListWrapper } from "./style";

export default function BlogList({ posts }: PostsMapProps) {
  const postsData = Array.from(Object.values(posts)) as unknown as PostsProps[];
  const tagList = Array.from(new Set(postsData.map(post => post.frontMatter.tags).flat()));

  const isInitialize = useRecoilValue(initializeAtom);
  const tagName = useRecoilValue(tagNameAtom);
  const isCategory = useRecoilValue(isCategoryAtom);

  const isChangeMode = useRecoilValue(changeMode);
  const [windowSize, setWindowSize] = useState<number | null>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWindowSize(window.innerWidth));
    };
  }, [setWindowSize]);

  const filterPostsData = postsData.filter(post => {
    let filterTag = "";
    for (let i = 0; i < post.frontMatter.tags.length; i++)
      if (tagName.includes(post.frontMatter.tags[i])) filterTag = post.frontMatter.tags[i];
    return filterTag;
  });

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
        {isInitialize ? postsData.map(post => <Blog key={post.frontMatter.title} post={post.frontMatter} />) : ""}

        {!isInitialize && !isCategory
          ? filterPostsData.map(post => <Blog key={post.frontMatter.title} post={post.frontMatter} />)
          : ""}
      </BlogGridWrapper>
    </BlogWrapper>
  );
}
