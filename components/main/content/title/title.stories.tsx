/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { withKnobs, text } from "@storybook/addon-knobs";
import Title from ".";

export default {
  title: "components/Title",
  component: Title,
  parameters: {
    componentSubtitle: "나를 요약하는 텍스트 컴포넌트",
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
};

export const Default = () => {
  const jobContent = text("jobContent", "프론트엔드를 지망하고 있는");
  const accentContent = text("accentContent", "도전하는 개발자");
  const name = text("name", " 손진영입니다 :)");
  return <Title name={name} accentContent={accentContent} jobContent={jobContent} />;
};
