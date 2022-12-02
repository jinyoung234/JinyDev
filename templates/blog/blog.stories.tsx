/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Blog from ".";
import { LayoutWrapper } from "../../components/common/layout/style";
import styled from "styled-components";
import { withNextRouter } from "@gogaille/storybook-addon-next-router";
import {
  BlogCardContainer,
  BlogCategoryContainer,
  BlogCategoryListWrapper,
  BlogContainer,
  CategoryTagContainer,
} from "./style";
import CategoryTag from "../../components/blog/categoryTag";
import BlogCategory from "../../components/blog/blogCategory";
import BlogCard from "../../components/blog/blogCard";
import { DEV_CATEGORY_LIST } from "../../constants";
import { PostsProps } from "../../interfaces/common";
import { useRecoilValue } from "recoil";
import { categoryNameAtom, initializeAtom, isCategoryAtom, tagNameAtom } from "../../atoms";

const Container = styled.div`
  width: 1400px;
  ${BlogCategoryContainer} {
    position: absolute;
    top: 20px;
  }
`;
export default {
  title: "templates/Blog",
  component: Blog,
  parameters: {
    componentSubtitle: "JinyDev Dev & Blog Page Template",
  },
  decorators: [withKnobs, withNextRouter],
};

export const DevPage = () => {
  const posts = [
    {
      frontMatter: {
        category: "Next.js",
        createdAt: "2022-11-25 15:49",
        description: "구글 애널리틱스, 댓글 적용 방법을 알아보자",
        tags: ["Google Analytics", "Utterance"],
        thumbnailUrl: "/image/Google-Analytics.png",
        title: "구글 애널리틱스, 댓글 적용",
      },
      slug: "google-analytics-utterance",
    },
    {
      frontMatter: {
        category: "Next.js",
        createdAt: "2022-11-24 12:01",
        description: "SEO는 무엇이고 어떻게 설정해야할까?",
        tags: ["SEO", "Next.js"],
        thumbnailUrl: "/image/SEO.png",
        title: "JinyDev SEO 최적화 Part 1",
      },
      slug: "seo-optimization1",
    },
    {
      frontMatter: {
        category: "TypeScript",
        createdAt: "2022-11-25 14:35",
        description: "Type Challenge - Tuple of Object",
        tags: ["Type Challenge", "TypeScript"],
        thumbnailUrl: "/typescript/typechallenge.png",
        title: "Tuple of Object",
      },
      slug: "type-challenge-Tuple-of-Object",
    },
  ];

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
    <Container>
      <LayoutWrapper isChangeMode={false}>
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
      </LayoutWrapper>
    </Container>
  );
};
