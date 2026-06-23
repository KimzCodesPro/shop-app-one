import { Theme } from "@/types";
import { useColorScheme } from "react-native";
import { useAppSelector } from "../store/hooks";
import useUserPreferences from "./useUserPreferences";

const useTheme = () => {
  const systemSchema = useColorScheme();
  const { theme: selectedTheme } = useUserPreferences();
  const colors = useAppSelector((state) => state.theme);

  const getSystemSchema = systemSchema === "dark" ? "dark" : "light";

  const resolved: Exclude<Theme, "system"> =
    selectedTheme === "system" ? getSystemSchema : selectedTheme;

  return colors[resolved];
};

export default useTheme;
