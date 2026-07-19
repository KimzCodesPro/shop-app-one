import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = (isSelected?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "space-between",
      height: VS(96),
      paddingVertical: spacing.space16.height,
      paddingHorizontal: spacing.space16.width,
      borderRadius: radius.lg,
      borderWidth: HS(1),
      borderColor: isSelected ? colors.primary.base : colors.border.default,
      backgroundColor: colors.background.base,
    },
    leading: {
      gap: spacing.space4.height,
    },
    leadingTitle: {
      color: colors.foreground.primary,
    },
    leadingDescription: {
      color: colors.foreground.tertiary,
    },
    trailing: {
      alignItems: "flex-end",
      gap: spacing.space4.height,
    },
  });

  return { styles, colors };
};

export default useStyles;
