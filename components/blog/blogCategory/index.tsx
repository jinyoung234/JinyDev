/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryNameAtom, changeMode, initializeAtom, isCategoryAtom } from "../../../atoms";
import { BlogCategoryProps } from "../../../interfaces/common";
import { BlogCategoryWrapper } from "./style";

export default function BlogCategory({ categoryData, count }: BlogCategoryProps) {
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
