import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Utterances() {
  const utterances = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof utterances.current === null) return;
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://utteranc.es/client.js";
    scriptElem.async = true;
    scriptElem.setAttribute("repo", "jinyoung234/JinyDev");
    scriptElem.setAttribute("issue-term", "title");
    scriptElem.setAttribute("theme", "github-light");
    scriptElem.setAttribute("label", "blog-comment");
    scriptElem.crossOrigin = "anonymous";
    utterances.current?.appendChild(scriptElem);
  }, []);

  return (
    <Container ref={utterances}>
      <hr />
    </Container>
  );
}

const Container = styled.section`
  margin-top: 5rem;
  .utterances {
    max-width: 80%;
  }
`;
