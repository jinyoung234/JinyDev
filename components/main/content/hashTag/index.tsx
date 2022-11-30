/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HashTagContainer, HashTagWrapper } from "./style";

/**
 * - `개발자가 갖춰야 할 요소`를 `해시태그로 표현`하였습니다.(`배움, 성장, 끈기`)
 * - `해당 요소`에 대한 `부가 설명을 추가`하였습니다.
 */
function HashTag() {
  return (
    <HashTagContainer>
      <HashTagWrapper>
        <p># 배움</p>
        <p>'즐거움'을 모토로 다양한 분야의 지식을 받아들이려 합니다.</p>
        <p># 성장</p>
        <p>성장 할 수 있다면 어떠한 것이든 두려워하지 않고 시작합니다.</p>
        <p># 끈기</p>
        <p>모든 일에서 쉽게 포기하지 않고 끝까지 최선을 다하려 합니다.</p>
      </HashTagWrapper>
    </HashTagContainer>
  );
}

export default HashTag;
