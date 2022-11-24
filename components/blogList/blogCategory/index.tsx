/* eslint-disable prefer-template */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { categoryNameAtom, initializeAtom, isCategoryAtom } from "../../../atoms";
import { BlogCategoryProps } from "../../../interfaces/common";

export default function BlogCategory({ category, count }: BlogCategoryProps) {
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
  return (
    <li onClick={() => handleFilterCategory(category)}>
      {category}
      {"(" + count + ")"}
    </li>
  );
}
