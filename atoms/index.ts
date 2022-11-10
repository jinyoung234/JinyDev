import { atom } from "recoil";

export const changeMode = atom({
  key: "changeMode",
  default: false,
});

export const initializeAtom = atom({
  key: "initializeAtom",
  default: true,
});

export const isCategoryAtom = atom({
  key: "isCategoryAtom",
  default: false,
});

export const tagNameAtom = atom({
  key: "isTagNameAtom",
  default: "",
});
