import { spacing } from "@/src/constants";
import { useFontStyles, useTheme } from "@/src/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const fonts = useFontStyles();

  const styles = StyleSheet.create({
    h1: {
      color: colors.foreground.primary,
      marginBottom: spacing.space16.height,
      ...fonts.mediumBold,
    },
    p: {
      color: colors.foreground.secondary,
      marginBottom: spacing.space16.height,
      ...fonts.smallRegular,
    },
  });

  return { styles };
};

export default useStyles;
