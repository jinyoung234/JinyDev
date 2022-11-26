import Content from "../components/main/content";
import Seo from "../components/common/seo";

export default function Home() {
  return (
    <>
      <Seo
        title="About"
        description="프론트엔드 지망생 손진영의 개발 블로그"
        keywords={["프론트엔드", "front-end", "react", "TypeScript", "Next.js"]}
      />
      <Content />
    </>
  );
}
