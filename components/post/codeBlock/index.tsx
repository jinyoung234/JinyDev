/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { CodeStatusBar, CodeWrapper, Line, LineNo, Table, TableWrapper } from "./style";
import { CodeProps } from "../../../interfaces/common";

function Code({ children, className }: CodeProps) {
  const language = className ? className.replace(/language-/, "") : "";
  return (
    <>
      {!className ? (
        <code>{children}</code>
      ) : (
        <CodeWrapper>
          <CodeStatusBar>
            <span>{language}</span>
            <div>
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
          </CodeStatusBar>
          <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language as any}>
            {({ tokens, getLineProps, getTokenProps }) => (
              <TableWrapper>
                <Table>
                  <tbody>
                    {tokens.map((line, i) => (
                      <Line {...getLineProps({ line, key: i })}>
                        <LineNo>{language ? i + 1 : ""}</LineNo>
                        <td>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </td>
                      </Line>
                    ))}
                  </tbody>
                </Table>
              </TableWrapper>
            )}
          </Highlight>
        </CodeWrapper>
      )}
    </>
  );
}

export default Code;
