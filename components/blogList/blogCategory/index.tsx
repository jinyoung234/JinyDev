/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { categoryNameAtom, initializeAtom, isCategoryAtom } from "../../../atoms";
import { BlogCategoryProps } from "../../../interfaces/common";

export default function BlogCategory({ category }: BlogCategoryProps) {
  const setInitialize = useSetRecoilState(initializeAtom);
  const setCategoryState = useSetRecoilState(isCategoryAtom);
  const setCategoryName = useSetRecoilState(categoryNameAtom);

  const handleFilterCategory = (categoryName: string) => {
    if (categoryName === "All") {
      setInitialize(true);
      return;
    }
    setInitialize(false);
    setCategoryState(true);
    setCategoryName(categoryName);
  };

  useEffect(() => {
    return () => {
      setInitialize(true);
      setCategoryState(false);
      setCategoryName("");
    };
  }, []);
  return <li onClick={() => handleFilterCategory(category)}>{category}</li>;
}
