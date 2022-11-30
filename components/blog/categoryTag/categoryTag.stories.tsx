/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import CategoryTag from ".";
import { action } from "@storybook/addon-actions";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-right: 10px;
    background-color: white;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 39px;
    padding: 4px 0;
  }
`;

const DEV_TAG = ["Next.js", "TypeScript", "Google", "SEO", "Type Challenge", "Utterance"];

export default {
  title: "components/CategoryTag",
  component: CategoryTag,
  parameters: {
    componentSubtitle: "BlogCard 내 태그들을 카테고리로 나타낸 컴포넌트",
  },
};

export const Default = () => {
  return (
    <Container onClick={action("handleFilterTag")}>
      {DEV_TAG.map((tag, i) => (
        <CategoryTag key={i} tag={tag} />
      ))}
    </Container>
  );
};
