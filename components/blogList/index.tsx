import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { changeMode } from "../../atoms";
import Blog from "./blog";
import BlogCategory from "./blogCategory";
import CategoryTag from "./categoryTag";
import { BlogCategoryWrapper, BlogGridWrapper, BlogWrapper, CategoryTagListWrapper } from "./style";

export default function BlogList() {
  const categoryList = ["TypeScript", "JavaScript", "React", "Algorithm", "DevOps", "FrontEnd", "CS"];
  const blogList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        {blogList.map(blogContent => (
          <CategoryTag key={blogContent} />
        ))}
      </CategoryTagListWrapper>
      {windowSize && windowSize >= 1420 && (
        <BlogCategoryWrapper isChangeMode={isChangeMode}>
          <ul>
            Category
            {categoryList.map(category => (
              <BlogCategory key={category} category={category} />
            ))}
          </ul>
        </BlogCategoryWrapper>
      )}
      <BlogGridWrapper>
        {blogList.map(blogContent => (
          <Blog key={blogContent} />
        ))}
      </BlogGridWrapper>
    </BlogWrapper>
  );
}
