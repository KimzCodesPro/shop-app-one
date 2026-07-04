import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = (isActive: boolean, disabled?: boolean) => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: isActive ? "flex-end" : "flex-start",
      width: HS(36),
      height: VS(20),
      borderRadius: radius.full,
      backgroundColor: isActive ? colors.primary.base : colors.border.default,
      paddingHorizontal: HS(spacing.space4.width),
      opacity: disabled ? 0.8 : 1,
    },
    indicator: {
      width: HS(16),
      height: VS(16),
      borderRadius: radius.full,
      backgroundColor: colors.background.card,
    },
  });

  return { colors, styles };
};

export default useStyles;
