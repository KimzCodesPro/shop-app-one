import { opacity, radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";

const { HS, VS } = scalingMethods;

const useStyles = (enabled: boolean, disabled?: boolean) => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    track: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: enabled ? "flex-end" : "flex-start",
      width: HS(36),
      height: VS(20),
      borderRadius: radius.full,
      backgroundColor: enabled ? colors.primary.base : colors.border.default,
      paddingHorizontal: spacing.space4.width,
      opacity: disabled ? opacity.disabled : opacity.full,
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
