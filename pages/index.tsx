import Seo from "../components/common/seo";
import Content from "../templates/content";

export default function MainPage() {
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
