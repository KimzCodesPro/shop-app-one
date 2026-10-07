import { useAppSelector } from "../store/hooks";
import useUserPreferences from "./useUserPreferences";

const useTheme = () => {
  const { resolvedAppTheme } = useUserPreferences();
  const colors = useAppSelector((state) => state.theme);

  return colors[resolvedAppTheme];
};

export default useTheme;
