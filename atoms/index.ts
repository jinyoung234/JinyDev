import { atom, AtomEffect } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "JinyDev",
});

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedAtom).then(() => persistAtom(param));
};

export const ssrCompletedAtom = atom({
  key: "ssrCompleted",
  default: false,
});

export const changeMode = atom({
  key: "changeMode",
  default: false,
  effects_UNSTABLE: [persistAtomEffect],
});

// Blog 컴포넌트의 초기 상태인지 확인하는 atom
export const initializeAtom = atom({
  key: "initializeAtom",
  default: true,
  effects_UNSTABLE: [persistAtomEffect],
});

// category로 blog 컴포넌트를 변경하는 건지 확인하는 atom
export const isCategoryAtom = atom({
  key: "isCategoryAtom",
  default: false,
  effects_UNSTABLE: [persistAtomEffect],
});

// 클릭한 tagName에 대한 atom
export const tagNameAtom = atom({
  key: "tagNameAtom",
  default: "",
  effects_UNSTABLE: [persistAtomEffect],
});

// 클릭한 category에 대한 atom
export const categoryNameAtom = atom({
  key: "categoryNameAtom",
  default: "",
  effects_UNSTABLE: [persistAtomEffect],
});
