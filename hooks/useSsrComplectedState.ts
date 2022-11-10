import { useSetRecoilState } from "recoil";
import { ssrCompletedAtom } from "../atoms";

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedAtom);
  return () => setSsrCompleted(true);
};
