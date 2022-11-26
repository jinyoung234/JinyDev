/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HashTagContainer, HashTagWrapper } from "./style";

export default function HashTag() {
  return (
    <HashTagContainer>
      <HashTagWrapper>
        <li># 배움</li>
        <li>'즐거움'을 모토로 다양한 분야의 지식을 받아들이려 합니다.</li>
        <li># 성장</li>
        <li>성장 할 수 있다면 어떠한 것이든 두려워하지 않고 시작합니다.</li>
        <li># 끈기</li>
        <li>모든 일에서 쉽게 포기하지 않고 끝까지 최선을 다하려 합니다.</li>
      </HashTagWrapper>
    </HashTagContainer>
  );
}
