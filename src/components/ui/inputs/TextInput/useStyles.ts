import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import useFontStyles from "@/hooks/useFontStyles";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { StatusType } from "./types";
const { HS, VS } = scalingMethods;

const useStyles = (status?: StatusType) => {
  const fontStyles = useFontStyles();
  const colors = useTheme();

  const borderMapperColor = {
    error: colors.danger.base,
    focused: colors.primary.base,
    default: colors.border.default,
    filled: colors.border.default,
  };

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    label: {
      marginBottom: spacing.space8.height,
    },
    inputWrapper: {
      height: VS(52),
      gap: spacing.space12.width,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      borderWidth: HS(1),
      borderColor: borderMapperColor[status ?? "default"],
      borderRadius: radius.sm,
      backgroundColor: colors.background.base,
    },
    inputText: {
      flex: 1,
      alignSelf: "stretch",
      color: colors.fg.primary,
      ...fontStyles.smallRegular,
      lineHeight: 0,
    },
    errorMessage: {
      marginTop: spacing.space8.height,
    },
  });

  return { colors, styles };
};

export default useStyles;
