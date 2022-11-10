import { atom } from "recoil";

export const changeMode = atom({
  key: "changeMode",
  default: false,
});

// Blog 컴포넌트의 초기 상태인지 확인하는 atom
export const initializeAtom = atom({
  key: "initializeAtom",
  default: true,
});

// category로 blog 컴포넌트를 변경하는 건지 확인하는 atom
export const isCategoryAtom = atom({
  key: "isCategoryAtom",
  default: false,
});

// 클릭한 tagName에 대한 atom
export const tagNameAtom = atom({
  key: "tagNameAtom",
  default: "",
});

// 클릭한 category에 대한 atom
export const categoryNameAtom = atom({
  key: "categoryNameAtom",
  default: "",
});
