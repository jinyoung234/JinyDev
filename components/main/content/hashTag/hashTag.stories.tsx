/* eslint-disable @typescript-eslint/no-explicit-any */
import HashTag from ".";

export default {
  title: "components/HashTag",
  component: HashTag,
  parameters: {
    componentSubtitle: "중요시 하는 요소들을 해시 태그로 표현한 텍스트 컴포넌트",
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <HashTag />;
};
