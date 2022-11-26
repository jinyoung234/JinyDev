import React from "react";
import { CONTENT_TITLE } from "../../../constants";
import HashTag from "./hashTag";
import { ContentContainer, ContentImgWrapper, ContentSectionContainer } from "./style";
import Title from "./title";

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
