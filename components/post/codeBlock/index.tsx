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

export default CodeBlock;
