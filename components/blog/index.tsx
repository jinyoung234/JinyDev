/* eslint-disable no-plusplus */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryNameAtom, initializeAtom, isCategoryAtom, tagNameAtom } from "../../atoms";
import { BLOG_CATEGORY_LIST, DEV_CATEGORY_LIST } from "../../constants";
import { BlogProps, PostsProps } from "../../interfaces/common";
import BlogCategory from "./blogCategory";
import BlogCard from "./blogCard";
import {
  BlogCardContainer,
  BlogCategoryContainer,
  BlogCategoryListWrapper,
  BlogContainer,
  CategoryTagContainer,
} from "./style";
import CategoryTag from "./categoryTag";

export default function Blog({ posts }: BlogProps) {
  const [windowSize, setWindowSize] = useState<number | null>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWindowSize(window.innerWidth));
    };
  }, [setWindowSize]);

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

  const router = useRouter();
  const isRoute = router.asPath.split("/")[1];

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
    <BlogContainer>
      <CategoryTagContainer>
        {tagList.map(tag => (
          <CategoryTag tag={tag} key={tag} />
        ))}
      </CategoryTagContainer>
      {windowSize && windowSize >= 1420 && (
        <BlogCategoryContainer>
          <BlogCategoryListWrapper>
            Category
            {isRoute === "dev"
              ? DEV_CATEGORY_LIST.map((category, i) => (
                  <BlogCategory key={category} categoryData={category} count={categoryCount[i]} />
                ))
              : BLOG_CATEGORY_LIST.map(category => <BlogCategory count={1} key={category} categoryData={category} />)}
          </BlogCategoryListWrapper>
        </BlogCategoryContainer>
      )}
      <BlogCardContainer>
        {isInitialize
          ? postsData.map(post => <BlogCard key={post.frontMatter.title} slug={post.slug} post={post.frontMatter} />)
          : ""}
        {!isInitialize && isCategory
          ? filterPostsCategoryData.map(post => (
              <BlogCard key={post.frontMatter.title} slug={post.slug} post={post.frontMatter} />
            ))
          : ""}
        {!isInitialize && !isCategory
          ? filterPostsData.map(post => (
              <BlogCard key={post.frontMatter.title} slug={post.slug} post={post.frontMatter} />
            ))
          : ""}
      </BlogCardContainer>
    </BlogContainer>
  );
}
