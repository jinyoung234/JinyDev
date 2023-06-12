/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryNameAtom, initializeAtom, isCategoryAtom, tagNameAtom } from "../../atoms";
import { BLOG_CATEGORY_LIST, DEV_CATEGORY_LIST } from "../../constants";
import { BlogProps, PostsProps } from "../../interfaces/common";
import BlogCategory from "../../components/blog/blogCategory";
import BlogCard from "../../components/blog/blogCard";
import {
  BlogCardContainer,
  BlogCategoryContainer,
  BlogCategoryListWrapper,
  BlogContainer,
  CategoryTagContainer,
} from "./style";
import CategoryTag from "../../components/blog/categoryTag";

/**
 * > `Blog & Dev 페이지의 템플릿` 입니다.
 *
 * > `mdx meta data`를 이용하여 `게시물들의 정보`들을 `Card` 형태로 화면에 나타내었습니다.
 *
 * > `게시물을 클릭`하면 해당 `게시물의 페이지로 이동`합니다.
 *
 * > `mdx file meta data` 중 `tags`를 이용하여 `게시물들의 tag들을 카테고리 형태`로 나타내었습니다.
 *
 * > `tag들을 클릭`하면 `tag name에 해당되는 게시물만 다시 렌더링` 하여 나타냅니다.
 *
 * > `화면 우측에는 블로그의 카테고리`이며, `All을 클릭` 할 경우 `전체 게시물을 렌더링` 하여 화면에 나타냅니다.
 *
 * > `All이 아닌 카테고리들을 클릭`하면 `meta data내 존재하는 category에 해당되는 게시물을 렌더링` 하여 화면에 나타냅니다.
 */
function Blog({ posts }: BlogProps) {
  const [windowSize, setWindowSize] = useState<number | null>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWindowSize(window.innerWidth));
    };
  }, [setWindowSize]);

  const postsData = Array.from(Object.values(posts)).sort(
    (a, b) =>
      new Date((b as unknown as PostsProps).frontMatter.createdAt).getTime() -
      new Date((a as unknown as PostsProps).frontMatter.createdAt).getTime(),
  ) as unknown as PostsProps[];
  const tagList = Array.from(new Set(postsData.map(post => post.frontMatter.tags).flat()));

  const isInitialize = useRecoilValue(initializeAtom);
  const tagName = useRecoilValue(tagNameAtom);
  const categoryName = useRecoilValue(categoryNameAtom);
  const isCategory = useRecoilValue(isCategoryAtom);

  const filterPostsData = postsData.filter(post => {
    let filterTag = "";
    for (let i = 0; i < post?.frontMatter?.tags?.length; i++)
      if (tagName.includes(post?.frontMatter?.tags[i])) filterTag = post?.frontMatter?.tags[i];
    return filterTag;
  });
  const filterPostsCategoryData = postsData.filter(post => post.frontMatter.category === categoryName);

  const router = useRouter();
  const isRoute = router.asPath.split("/")[1];

  const [categoryCount, setCategoryCount] = useState([postsData.length, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    postsData.forEach(data => {
      if (isRoute === "dev") {
        DEV_CATEGORY_LIST.forEach((category, i) => {
          if (data.frontMatter.category === DEV_CATEGORY_LIST[i]) {
            setCategoryCount(prev => {
              const copy = [...prev];
              copy[i]++;
              return copy;
            });
          }
        });
      } else {
        BLOG_CATEGORY_LIST.forEach((category, i) => {
          if (data.frontMatter.category === BLOG_CATEGORY_LIST[i]) {
            setCategoryCount(prev => {
              const copy = [...prev];
              copy[i]++;
              return copy;
            });
          }
        });
      }
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
              : BLOG_CATEGORY_LIST.map((category, i) => (
                  <BlogCategory count={categoryCount[i]} key={category} categoryData={category} />
                ))}
          </BlogCategoryListWrapper>
        </BlogCategoryContainer>
      )}
      <BlogCardContainer>
        {isInitialize ? postsData.map((post, i) => <BlogCard key={i} slug={post.slug} post={post?.frontMatter} />) : ""}
        {!isInitialize && isCategory
          ? filterPostsCategoryData.map((post, i) => <BlogCard key={i} slug={post.slug} post={post?.frontMatter} />)
          : ""}
        {!isInitialize && !isCategory
          ? filterPostsData.map((post, i) => <BlogCard key={i} slug={post.slug} post={post?.frontMatter} />)
          : ""}
      </BlogCardContainer>
    </BlogContainer>
  );
}

Blog.defaultProps = {
  posts: "hi",
};

export default Blog;
