/* eslint-disable react/no-children-prop */

import PostTitle from ".";
import { LayoutWrapper } from "../../common/layout/style";
import { PostContentContainer } from "../style";

export default {
  title: "components/PostTitle",
  component: PostTitle,
  parameters: {
    componentSubtitle: "Post(Slug) Page 내 Title 관련 컴포넌트",
  },
};

export const Default = () => {
  const DATA = {
    title: "Readonly",
    createdAt: "2022-11-09 16:54",
    description: "Type Challenge - Readonly",
    thumbnailUrl: "/typescript/typechallenge.png",
    tags: ["Type Challenge", "TypeScript"],
    category: "TypeScript",
  };
  return (
    <LayoutWrapper isChangeMode={false}>
      <PostContentContainer>
        <PostTitle frontMatter={DATA} />
      </PostContentContainer>
    </LayoutWrapper>
  );
};
