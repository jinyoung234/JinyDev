import { useEffect, useRef } from "react";
import { UtterancesWrapper } from "./style";

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
    <UtterancesWrapper ref={utterances}>
      <hr />
    </UtterancesWrapper>
  );
}
