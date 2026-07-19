import { useTheme } from "@/hooks";
import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const TypographyMapping = {
    lg: {
      userName: {
        font: "mediumBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.tertiary,
      },
    },
    sm: {
      userName: {
        font: "normalBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.secondary,
      },
    },
  } as const;

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: spacing.space12.width,
      alignItems: "center",
    },
  });

  return { styles, colors, TypographyMapping };
};

export default useStyles;
