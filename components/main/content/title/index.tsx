import { useRecoilValue } from "recoil";
import { changeMode } from "../../../../atoms";
import { TitleProps } from "../../../../interfaces/common";
import { TitleWrapper } from "./style";

Title.defaultProps = {
  jobContent: "프론트엔드를 지망하고 있는",
  accentContent: "도전하는 개발자",
  name: "손진영 입니다.",
};

/**
 * 1. `제 자신을 표현하는 단어`를 짧게 요약하여 컴포넌트 형태로 표기하였습니다.
 * 2. `jobContent`, `accentContent`, `name`에 따라 `title`을 변경할 수 있습니다.
 *
 */
function Title({ jobContent, accentContent, name }: TitleProps) {
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

export default Title;
