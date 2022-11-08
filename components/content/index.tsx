import React from "react";
import { useRecoilValue } from "recoil";
import { changeMode } from "../../atoms";
import { CONTENT_TITLE } from "../../constants";
import HashTag from "./hashTag";
import { ContentWrapper } from "./style";
import Title from "./title";

function Content() {
  const isChangeMode = useRecoilValue(changeMode);
  return (
    <ContentWrapper isChangeMode={isChangeMode}>
      <section>
        <Title
          name={CONTENT_TITLE.name}
          jobContent={CONTENT_TITLE.jobContent}
          accentContent={CONTENT_TITLE.accentContent}
        />
        <HashTag />
      </section>
      <section>
        <img src="image/jinyoung.jpg" alt="it's me" />
      </section>
    </ContentWrapper>
  );
}

export default Content;
