import { BlogWrapper } from "./style";

export default function Blog() {
  return (
    <BlogWrapper>
      <div>
        <img src="image/jinyoung.jpg" alt="jinyoun" />
      </div>
      <div id="contentContainer">
        <span>나의 첫 블로그 체험기</span>
        <span>블로그 만드는거 은근 귀찮고 디자인 하기 시루떡</span>
        <span>2022-11-04 17:47</span>
        <div>
          <div>Next.js</div>
          <div>React</div>
        </div>
      </div>
    </BlogWrapper>
  );
}
