/* eslint-disable operator-assignment */
/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { TocProps } from "../../../interfaces/common";
import { Container, Item } from "./style";

export default function Toc({ content }: TocProps) {
  const [activeId, setActiveId] = useState("");
  useIntersectionObserver(setActiveId, content);
  const titles = content.split(`\n`).filter(t => t.includes("# "));
  const result = titles
    .filter(str => str[0] === "#")
    .map(item => {
      const depth = item.match(/#/g)?.length;
      return { title: item.split("# ")[1].replace(/`/g, "").trim(), depth };
    });

  const convertTextToId = (title: string) => {
    return title.toLowerCase().replace(/[?.]/gi, "").replace(/\s/g, "-");
  };
  const onValid = (title: string) => {
    return convertTextToId(title) === activeId;
  };
  return (
    <Container>
      <ul>
        {result.map((item, index) => (
          <a key={item.title + index} href={`#${convertTextToId(item.title)}`}>
            <Item isSelected={onValid(item.title)} depth={item.depth ?? 0}>
              {item.title}
            </Item>
          </a>
        ))}
      </ul>
    </Container>
  );
}

// 렌더링 최적화
// export default React.memo(Toc);
