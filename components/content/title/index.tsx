import { useRecoilValue } from "recoil";
import { changeMode } from "../../../atoms";
import { TitleWrapper } from "./style";

export interface TitleProps {
  /** 희망하는 직무 */
  jobContent: string;
  /** 강조하고 싶은 말 */
  accentContent: string;
  /** 이름 */
  name: string;
}

Title.defaultProps = {
  content: "프론트엔드를 지망하고 있는 '도전하는 개발자' 손진영 입니다 :)",
};

/**
 * - `스스로를 소개`하는 컴포넌트
 * - `content`에 따라 `title`을 변경`할 수 있습니다.
 * - `light mode`, `color mode`에 따라 `accent color`를 변경 할 수 있습니다.
 */
export default function Title({ jobContent, accentContent, name }: TitleProps) {
  const isChangeMode = useRecoilValue(changeMode);
  return (
    <TitleWrapper isChangeMode={isChangeMode}>
      <p>{jobContent}</p>
      <p>
        <span>{accentContent}</span>
        <span>{name}</span>
      </p>
    </TitleWrapper>
  );
}
