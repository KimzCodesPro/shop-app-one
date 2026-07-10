import { radius, spacing } from "@/constants";
import { useFontStyles, useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { StatusType } from "./types";
const { HS, VS } = scalingMethods;

const useStyles = (inputCurrentStatus: StatusType) => {
  const colors = useTheme();
  const fontFamilyStyles = useFontStyles();

  const borderColorMapping = {
    default: colors.fg.tertiary,
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
      gap: spacing.space12.width,
    },
    textInput: {
      alignSelf: "stretch",
      flex: 1,
      color: colors.fg.primary,
      ...fontFamilyStyles.smallRegular,
      lineHeight: 0,
    },
  });
  return { styles, colors };
};

export default useStyles;
