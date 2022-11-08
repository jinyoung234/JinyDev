import React from "react";
import { useRecoilValue } from "recoil";
import { changeMode } from "../../../atoms";
import { CategoryTagWrapper } from "./style";

export default function CategoryTag() {
  const isChangeMode = useRecoilValue(changeMode);
  return <CategoryTagWrapper isChangeMode={isChangeMode}>index</CategoryTagWrapper>;
}
