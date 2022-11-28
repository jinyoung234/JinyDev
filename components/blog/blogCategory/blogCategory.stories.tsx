/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import BlogCategory from ".";
import { DEV_CATEGORY_LIST } from "../../../constants";
import { BlogCategoryContainer, BlogCategoryListWrapper } from "../style";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 1400px;
  height: 780px;
  ${BlogCategoryContainer} {
    position: relative;
    left: 30%;
  }
`;

export default {
  title: "components/BlogCategory",
  component: BlogCategory,
  parameters: {
    componentSubtitle: "Blog page Category Component",
  },
};

export const Default = () => {
  const CATEGORY_COUNT = [3, 1, 2, 0, 0, 0, 0, 0, 0];
  return (
    <Container>
      <BlogCategoryContainer>
        <BlogCategoryListWrapper>
          {DEV_CATEGORY_LIST.map((categoryName, i) => (
            <div key={i} onClick={action("handleFilterCategory")}>
              <BlogCategory categoryData={categoryName} count={CATEGORY_COUNT[i]} />
            </div>
          ))}
        </BlogCategoryListWrapper>
      </BlogCategoryContainer>
    </Container>
  );
};
