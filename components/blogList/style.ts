import styled from "styled-components";

export const BlogWrapper = styled.div`
  padding: 2rem 20.5% 2rem 20%;
  position: relative;
`;

export const CategoryTagListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1.8rem 0;
  margin-bottom: 2rem;
`;

export const BlogGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
`;

export const BlogCategoryWrapper = styled.div<{ isChangeMode: boolean }>`
  background-color: white;
  position: fixed;
  right: 3.2%;
  width: 14%;
  border-radius: 2rem;
  ul {
    font-size: 1.8rem;
    font-weight: 500;
    color: black;
    padding: 2rem 1.4rem;
    li {
      display: flex;
      font-size: 1.3rem;
      padding: 1.5rem 0;
      font-weight: 300;
      :hover {
        color: ${props => (props.isChangeMode ? "#8AB633" : "#868e96")};
        transition: color 0.2s ease-in-out;
      }
    }
    li:first-child {
      margin-top: 1rem;
    }
  }
`;
