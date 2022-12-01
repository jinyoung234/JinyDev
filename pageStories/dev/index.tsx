/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import Layout from "../../components/common/layout";
import {
  BlogCardContainer,
  BlogCategoryContainer,
  BlogCategoryListWrapper,
  BlogContainer,
  CategoryTagContainer,
} from "../../templates/blog/style";
import React, { useEffect, useState } from "react";
import CategoryTag from "../../components/blog/categoryTag";
import BlogCategory from "../../components/blog/blogCategory";
import BlogCard from "../../components/blog/blogCard";
import { DEV_CATEGORY_LIST } from "../../constants";
import { BlogProps, PostsProps } from "../../interfaces/common";
import { useRecoilValue } from "recoil";
import { categoryNameAtom, initializeAtom, isCategoryAtom, tagNameAtom } from "../../atoms";

/**
 * > 블로그의 `전체 게시물을 확인할 수 있는 페이지` 입니다.
 *
 * > `카테고리 태그, 블로그 게시물, 카테고리 컴포넌트`로 구성 되어있습니다.
 *
 * > 카테고리 태그 컴포넌트는 `블로그의 태그들을 모아 하나의 컴포넌트로 구성`하였습니다.
 *
 * > 블로그 게시물은 `제목, 설명, 작성 일자, 태그` 등을 나타냅니다.
 *
 * > 카테고리는 총 `9개의 카테고리로 구성`하여 나타내었습니다.
 */

function DevStory({ posts }: BlogProps) {
  const postsData = Array.from(Object.values(posts)) as unknown as PostsProps[];
  const tagList = Array.from(new Set(postsData.map(post => post.frontMatter.tags).flat()));

  const isInitialize = useRecoilValue(initializeAtom);
  const tagName = useRecoilValue(tagNameAtom);
  const categoryName = useRecoilValue(categoryNameAtom);
  const isCategory = useRecoilValue(isCategoryAtom);

  const filterPostsData = postsData.filter(post => {
    let filterTag = "";
    for (let i = 0; i < post.frontMatter.tags.length; i++)
      if (tagName.includes(post.frontMatter.tags[i])) filterTag = post.frontMatter.tags[i];
    return filterTag;
  });
  const filterPostsCategoryData = postsData.filter(post => post.frontMatter.category === categoryName);

  const [categoryCount, setCategoryCount] = useState([postsData.length, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    postsData.forEach(data => {
      DEV_CATEGORY_LIST.forEach((category, i) => {
        if (data.frontMatter.category === DEV_CATEGORY_LIST[i]) {
          setCategoryCount(prev => {
            const copy = [...prev];
            copy[i]++;
            return copy;
          });
        }
      });
    });
  }, []);
  return (
    <Layout>
      <BlogContainer>
        <CategoryTagContainer>
          {tagList.map(tag => (
            <CategoryTag tag={tag} key={tag} />
          ))}
        </CategoryTagContainer>

        <BlogCategoryContainer>
          <BlogCategoryListWrapper>
            Category
            {DEV_CATEGORY_LIST.map((category, i) => (
              <BlogCategory key={category} categoryData={category} count={categoryCount[i]} />
            ))}
          </BlogCategoryListWrapper>
        </BlogCategoryContainer>

        <BlogCardContainer>
          {isInitialize
            ? postsData.map((post, i) => <BlogCard key={i} slug={post.slug} post={post.frontMatter} />)
            : ""}
          {!isInitialize && isCategory
            ? filterPostsCategoryData.map((post, i) => <BlogCard key={i} slug={post.slug} post={post.frontMatter} />)
            : ""}
          {!isInitialize && !isCategory
            ? filterPostsData.map((post, i) => <BlogCard key={i} slug={post.slug} post={post.frontMatter} />)
            : ""}
        </BlogCardContainer>
      </BlogContainer>
    </Layout>
  );
}

export default DevStory;
