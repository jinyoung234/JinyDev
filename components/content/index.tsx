import React, { useState } from "react";
import { CONTENT_TITLE } from "../../constants";
import HashTag from "./hashTag";
import { ContentComponent } from "./style";
import Title from "./title";

function Content() {
  const [isLightMode] = useState(true);
  return (
    <ContentComponent isLightMode={isLightMode}>
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
    </ContentComponent>
  );
}

export default Content;
