import { opacity, radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (isSelected: boolean, disabled?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: HS(20),
      height: VS(20),
      backgroundColor: isSelected
        ? colors.primary.base
        : colors.background.base,
      borderRadius: radius.xs,
      borderWidth: HS(1.5),
      borderColor: isSelected ? colors.primary.base : colors.border.default,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
    indicator: {
      opacity: disabled ? opacity.disabled : opacity.full,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return { styles, colors };
};

export default useStyles;
