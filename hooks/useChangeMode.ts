import { useRecoilState } from "recoil";
import { changeMode } from "../atoms";

const useChangeMode = () => {
  const [isChangeMode, setIsChangeMode] = useRecoilState(changeMode);
  const handleChangeMode = () => {
    setIsChangeMode(!isChangeMode);
    localStorage.setItem("changeMode", JSON.stringify(!isChangeMode));
  };

  return { isChangeMode, handleChangeMode };
};

export default useChangeMode;
