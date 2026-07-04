import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyle = (isActive: boolean, disabled?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: HS(20),
      height: VS(20),
      backgroundColor: isActive ? colors.primary.base : colors.background.base,
      borderRadius: radius.xs,
      borderWidth: HS(1.5),
      borderColor: isActive ? colors.primary.base : colors.border.default,
      opacity: disabled ? 0.8 : 1,
    },
    indicator: {
      opacity: disabled ? 0.8 : 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return { styles, colors };
};

export default useStyle;
