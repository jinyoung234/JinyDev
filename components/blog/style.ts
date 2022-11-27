import styled from "styled-components";
import { CategoryTagWrapper } from "./categoryTag/style";
import { BlogCardContentWrapper, BlogCardWrapper } from "./blogCard/style";

export const BlogContainer = styled.div`
  padding: 2rem 20.5% 2rem 20%;
  position: relative;
`;

export const CategoryTagContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1.8rem 0;
  margin-bottom: 2rem;
  ${CategoryTagWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0;
    margin-right: 1rem;
  }
`;

export const BlogCategoryListWrapper = styled.ul`
  font-size: 1.8rem;
  font-weight: 500;
  color: black;
  border-radius: 2rem;
  background-color: white;
`;

export const BlogCategoryContainer = styled.div`
  position: fixed;
  top: 16%;
  right: 3.2%;
  width: 14%;
  ${BlogCategoryListWrapper} {
    padding: 2rem 1.4rem;
    li {
      display: flex;
      padding: 1.5rem 0;
    }
    li:first-child {
      margin-top: 1rem;
    }
  }
`;

export const BlogCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  ${BlogCardWrapper} {
    display: flex;
    flex-direction: column;
  }
  ${BlogCardContentWrapper} {
    display: flex;
    flex-direction: column;
    padding: 1.4rem 1.4rem;
    span:first-child {
      margin-bottom: 1.3rem;
    }
    span:nth-child(2) {
      margin-bottom: 5rem;
    }
  }
`;
