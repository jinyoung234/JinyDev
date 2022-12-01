/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { withNextRouter } from "@gogaille/storybook-addon-next-router";
import styled from "styled-components";
import DevStory from "./dev";
import { BlogCategoryContainer } from "../templates/blog/style";

const Container = styled.div`
  width: 1400px;
  height: 580px;
  ${BlogCategoryContainer} {
    position: absolute;
    top: 20px;
  }
  footer {
    svg {
      width: 30px;
      height: 30px;
      margin: 0px 8px;
    }
    svg:first-child {
      padding-top: 2px;
    }
    svg:nth-child(2) {
      width: 28px;
    }
    svg:last-child {
      width: 24px;
      margin: 0px 12px;
      padding-top: 2px;
    }
  }
`;

export default {
  title: "Pages/Dev Page",
  component: DevStory,
  parameters: {
    componentSubtitle: "JinyDev Dev Page",
  },
  decorators: [withNextRouter],
};

export const Default = () => {
  const posts = [
    {
      frontMatter: {
        category: "Next.js",
        createdAt: "2022-11-25 15:49",
        description: "구글 애널리틱스, 댓글 적용 방법을 알아보자",
        tags: ["Google Analytics", "Utterance"],
        thumbnailUrl: "/image/Google-Analytics.png",
        title: "구글 애널리틱스, 댓글 적용",
      },
      slug: "google-analytics-utterance",
    },
    {
      frontMatter: {
        category: "Next.js",
        createdAt: "2022-11-24 12:01",
        description: "SEO는 무엇이고 어떻게 설정해야할까?",
        tags: ["SEO", "Next.js"],
        thumbnailUrl: "/image/SEO.png",
        title: "JinyDev SEO 최적화 Part 1",
      },
      slug: "seo-optimization1",
    },
    {
      frontMatter: {
        category: "TypeScript",
        createdAt: "2022-11-25 14:35",
        description: "Type Challenge - Tuple of Object",
        tags: ["Type Challenge", "TypeScript"],
        thumbnailUrl: "/typescript/typechallenge.png",
        title: "Tuple of Object",
      },
      slug: "type-challenge-Tuple-of-Object",
    },
  ];
  return (
    <Container>
      <DevStory posts={posts as any} />
    </Container>
  );
};
