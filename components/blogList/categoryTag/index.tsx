import React from "react";
import { useRecoilValue } from "recoil";
import { changeMode } from "../../../atoms";
import { CategoryTagProps } from "../../../interfaces/common";
import { CategoryTagWrapper } from "./style";

export default function CategoryTag({ tag }: CategoryTagProps) {
  const isChangeMode = useRecoilValue(changeMode);
  return <CategoryTagWrapper isChangeMode={isChangeMode}>{tag}</CategoryTagWrapper>;
}
