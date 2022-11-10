import { useRecoilState } from "recoil";
import { changeMode } from "../atoms";

const useChangeMode = () => {
  const [isChangeMode, setIsChangeMode] = useRecoilState(changeMode);
  const handleChangeMode = () => {
    setIsChangeMode(!isChangeMode);
  };

  return { isChangeMode, handleChangeMode };
};

export default useChangeMode;
