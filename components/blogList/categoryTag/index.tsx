import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeMode, initializeAtom, isCategoryAtom, tagNameAtom } from "../../../atoms";
import { CategoryTagProps } from "../../../interfaces/common";
import { CategoryTagWrapper } from "./style";

export default function CategoryTag({ tag }: CategoryTagProps) {
  const isChangeMode = useRecoilValue(changeMode);

  const setInitialize = useSetRecoilState(initializeAtom);
  const setCategory = useSetRecoilState(isCategoryAtom);
  const setTagName = useSetRecoilState(tagNameAtom);

  const handleFilterTag = (categoryTag: string) => {
    setInitialize(false);
    setCategory(false);
    setTagName(categoryTag);
  };

  useEffect(() => {
    return () => {
      setInitialize(true);
      setCategory(true);
      setTagName("");
    };
  }, []);

  return (
    <CategoryTagWrapper onClick={() => handleFilterTag(tag)} isChangeMode={isChangeMode}>
      {tag}
    </CategoryTagWrapper>
  );
}
