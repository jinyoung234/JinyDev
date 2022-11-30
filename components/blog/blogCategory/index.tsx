/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryNameAtom, changeMode, initializeAtom, isCategoryAtom } from "../../../atoms";
import { BlogCategoryProps } from "../../../interfaces/common";
import { BlogCategoryWrapper } from "./style";

/**
 * - `블로그의 카테고리`를 총 `9가지`로 나누었습니다.
 * - `사용자 UX를 고려`하여 `hover`시 `animation을 추가`했습니다.
 * - `카테고리를 클릭`하면 `handleFilterCategory 함수`를 통해 `해당 카테고리의 게시물이 렌더링` 됩니다.
 * - `All`을 누른다면 다시 `모든 게시물을 렌더링` 하도록 설계하였습니다.
 */
function BlogCategory({ categoryData, count }: BlogCategoryProps) {
  const setInitialize = useSetRecoilState(initializeAtom);
  const setCategory = useSetRecoilState(isCategoryAtom);
  const setCategoryName = useSetRecoilState(categoryNameAtom);

  const handleFilterCategory = (categoryName: string) => {
    if (categoryName === "All") {
      setInitialize(true);
      return;
    }
    setInitialize(false);
    setCategory(true);
    setCategoryName(categoryName);
  };

  useEffect(() => {
    return () => {
      setInitialize(true);
      setCategory(false);
      setCategoryName("");
    };
  }, []);
  const isChangeMode = useRecoilValue(changeMode);
  return (
    <BlogCategoryWrapper isChangeMode={isChangeMode} onClick={() => handleFilterCategory(categoryData)}>
      {categoryData}
      {"(" + count + ")"}
    </BlogCategoryWrapper>
  );
}

BlogCategory.defaultProps = {
  categoryData: "ex) All",
  count: "ex) 3",
};

export default BlogCategory;
