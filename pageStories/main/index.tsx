import React from "react";
import Layout from "../../components/common/layout";
import Content from "../../templates/content";

/**
 * - Main Page를 통해 `개발자로써의 제 자신을 표현` 하였습니다.
 * - Main page는 `NavBar, Content, Footer`로 구성하였습니다.
 * - styled-components의 `Theme`을 통해 `2가지의 Theme으로 화면을 구성`하였습니다.
 * - Nav Bar에 있는 `아이콘` 클릭을 통해 `lightMode, ColorMode를 확인`하실 수 있습니다.
 * - (Canvas에서 확인해주세요..!)
 */
function MainStory() {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default MainStory;
