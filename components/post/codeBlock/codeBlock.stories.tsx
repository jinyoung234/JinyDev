/* eslint-disable react/no-children-prop */

import CodeBlock from ".";
import { LayoutWrapper } from "../../common/layout/style";
import { PostContentContainer } from "../style";

export default {
  title: "components/CodeBlock",
  component: CodeBlock,
  parameters: {
    componentSubtitle: "Post(Slug) Page 내 codeBlock과 관련된 컴포넌트",
  },
};

export const Default = () => {
  const code = `
  /**
 * const typeChallenge: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
 */
const typeChallenge = {
  1: "juyoung",
  2: "youngju",
  3: "hyunji",
  4: "jeonghye",
  5: "jinyoung",
};
  `;
  return (
    <LayoutWrapper isChangeMode={false}>
      <PostContentContainer>
        <CodeBlock children={code} className="language-ts" />
      </PostContentContainer>
    </LayoutWrapper>
  );
};
