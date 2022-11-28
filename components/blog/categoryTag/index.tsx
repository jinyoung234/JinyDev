import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeMode, initializeAtom, isCategoryAtom, tagNameAtom } from "../../../atoms";
import { CategoryTagProps } from "../../../interfaces/common";
import { CategoryTagWrapper } from "./style";

/**
 * - `categoryTag에 있는 tagName`들은 모두 `blogCard 컴포넌트에 있는 tagName` 입니다.
 * - `사용자 UX를 고려`하여 `hover시 animation을 추가`했습니다.
 * - `handleFilterTag` 함수를 통해 `tag를 클릭`시 `tag와 관련된 게시물로 필터링` 하여 `화면에 렌더링` 됩니다.
 */
function CategoryTag({ tag }: CategoryTagProps) {
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
      setCategory(false);
      setTagName("");
    };
  }, []);

  return (
    <CategoryTagWrapper onClick={() => handleFilterTag(tag)} isChangeMode={isChangeMode}>
      <span>{tag}</span>
    </CategoryTagWrapper>
  );
}

CategoryTag.defaultProps = {
  tag: "BlogCard 컴포넌트들의 tag name",
};

export default CategoryTag;
