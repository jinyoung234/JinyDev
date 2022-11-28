/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { withNextRouter } from "@gogaille/storybook-addon-next-router";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import BlogCard from ".";
import { LayoutWrapper } from "../../common/layout/style";
import { BlogCardContainer, BlogContainer } from "../style";
import { BlogCardWrapper } from "./style";

const Container = styled.div`
  width: 1500px;
  ${LayoutWrapper} {
    display: flex;
    justify-content: center;
    align-items: center;
    ${BlogCardContainer} {
      display: flex;
      justify-content: center;
      align-items: center;
      ${BlogCardWrapper} {
        width: 100%;
      }
    }
  }
`;

export default {
  title: "components/BlogCard",
  component: BlogCard,
  parameters: {
    componentSubtitle: "블로그 게시물을 카드 형태로 나타낸 컴포넌트",
  },
  decorators: [withNextRouter({})],
};

export const Default = () => {
  const CARD_DATA = [
    {
      title: "Readonly",
      createdAt: "2022-11-09 16:54",
      description: "Type Challenge - Readonly",
      thumbnailUrl: "/typescript/typechallenge.png",
      tags: ["Type Challenge", "TypeScript"],
      category: "TypeScript",
    },
    {
      title: "구글 애널리틱스, 댓글 적용",
      createdAt: "2022-11-25 15:49",
      description: "구글 애널리틱스, 댓글 적용 방법을 알아보자",
      thumbnailUrl: "/image/Google-Analytics.png",
      tags: ["Google Analytics", "Utterance"],
      category: "Next.js",
    },
    {
      title: "JinyDev SEO 최적화 Part 1",
      createdAt: "2022-11-24 12:01",
      description: "SEO는 무엇이고 어떻게 설정해야할까?",
      thumbnailUrl: "/image/SEO.png",
      tags: ["SEO", "Next.js"],
      category: "Next.js",
    },
  ];
  const SLUG_DATA = ["dev/type-challenge-readonly", "dev/seo-optimization1", "dev/google-analytics-utterance"];
  return (
    <Container>
      <LayoutWrapper isChangeMode={false}>
        <BlogContainer>
          <BlogCardContainer onClick={action("handleMovePage")}>
            {CARD_DATA.map((data, i) => (
              <BlogCard post={data} slug={SLUG_DATA[i]} />
            ))}
          </BlogCardContainer>
        </BlogContainer>
      </LayoutWrapper>
    </Container>
  );
};
