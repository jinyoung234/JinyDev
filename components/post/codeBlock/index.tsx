/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {
  CodeBlockContainer,
  LineNoWrapper,
  LineWrapper,
  StatusBarWrapper,
  TableContainer,
  TableWrapper,
} from "./style";
import { CodeBlockProps } from "../../../interfaces/common";

/**
 * > Post(slug) page 내에서 `code 관련 dom을 codeBlock 형태로 변환`하는 컴포넌트 입니다.
 *
 * > props로 `children과 className`을 받는데, `children은 codeBlock 내 content`이며, `className은 프로그래밍 언어(TS)`를 뜻합니다.
 *
 * > `사용자의 UX를 고려`하여 `디자인 및 코드 라인 애니메이션을 추가`하였습니다.
 */
function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className ? className.replace(/language-/, "") : "";
  return (
    <>
      {!className ? (
        <code>{children}</code>
      ) : (
        <CodeBlockContainer>
          <StatusBarWrapper>
            <span>{language}</span>
            <div>
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
          </StatusBarWrapper>
          <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language as any}>
            {({ tokens, getLineProps, getTokenProps }) => (
              <TableContainer>
                <TableWrapper>
                  <tbody>
                    {tokens.map((line, i) => (
                      <LineWrapper {...getLineProps({ line, key: i })}>
                        <LineNoWrapper>{language ? i + 1 : ""}</LineNoWrapper>
                        <td>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </td>
                      </LineWrapper>
                    ))}
                  </tbody>
                </TableWrapper>
              </TableContainer>
            )}
          </Highlight>
        </CodeBlockContainer>
      )}
    </>
  );
}

CodeBlock.defaultProps = {
  className: "TS",
};

export default CodeBlock;
