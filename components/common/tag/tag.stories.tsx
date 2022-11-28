/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import Tag from ".";

const Container = styled.div<{ isPostTitle?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: ${props => (props.isPostTitle ? "16px" : "10px")};
`;

const TAG = ["TypeScript", "Next.js"];

export default {
  title: "components/Tag",
  component: Tag,
  parameters: {
    componentSubtitle: "블로그 주제에 대한 태그를 나타내는 컴포넌트",
  },
};

export const BlogTitle = () => {
  return (
    <Container>
      <Tag tags={TAG} />
    </Container>
  );
};

export const PostTitle = () => {
  return (
    <Container isPostTitle={true as boolean}>
      <Tag tags={TAG} />
    </Container>
  );
};

BlogTitle.storyName = "tags (BlogTitle Component)";
PostTitle.storyName = "tags (PostTitle Component)";
