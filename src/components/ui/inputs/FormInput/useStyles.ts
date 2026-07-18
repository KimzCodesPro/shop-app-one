import { radius, spacing } from "@/constants";
import { useFontStyles, useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { Platform, StyleSheet } from "react-native";
import { StatusType } from "./types";
const { HS, VS } = scalingMethods;

const useStyles = (inputCurrentStatus: StatusType) => {
  const colors = useTheme();
  const fontFamilyStyles = useFontStyles();

  const isAndroid = Platform.OS === "android";

  const borderColorMapping = {
    default: colors.foreground.tertiary,
    focused: colors.primary.base,
    filled: colors.primary.base,
    error: colors.danger.base,
  };

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },

    inputWrapper: {
      height: VS(52),
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      borderWidth: HS(1),
      borderColor: borderColorMapping[inputCurrentStatus],
      borderRadius: radius.sm,
      backgroundColor: colors.background.base,
      gap: spacing.space8.width,
    },
    textInput: {
      alignSelf: "stretch",
      flex: 1,
      color: colors.foreground.primary,
      ...fontFamilyStyles.smallRegular,
      lineHeight: isAndroid ? fontFamilyStyles.smallRegular.lineHeight : 0,
      textAlignVertical: "center",
      textAlign: "left",
      writingDirection: "ltr",
      paddingVertical: 0,
      includeFontPadding: false,
    },
  });
  return { styles, colors };
};

export default useStyles;
