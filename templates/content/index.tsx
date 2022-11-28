import React from "react";
import { CONTENT_TITLE } from "../../constants";
import HashTag from "../../components/main/content/hashTag";
import { ContentContainer, ContentImgWrapper, ContentSectionContainer } from "./style";
import Title from "../../components/main/content/title";

/**
 * - `2가지 섹션`으로 `Content를 구성`하였습니다.
 * - `왼쪽 섹션`에는 저에 대한 `짧은 소개`, 해시 태그를 통한 `핵심 요소 설명`이 `텍스트` 형태로 소개 되어있습니다.
 * - `오른쪽 섹션`에는 저에 대한 `이미지`가 있습니다.
 */
function Content() {
  return (
    <ContentContainer>
      <ContentSectionContainer>
        <Title
          name={CONTENT_TITLE.name}
          jobContent={CONTENT_TITLE.jobContent}
          accentContent={CONTENT_TITLE.accentContent}
        />
        <HashTag />
      </ContentSectionContainer>
      <ContentSectionContainer>
        <ContentImgWrapper src="image/jinyoung.jpg" alt="it's me" />
      </ContentSectionContainer>
    </ContentContainer>
  );
}

export default Content;
