import { radius, spacing } from "@/constants";
import { useFontStyles, useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { Platform, StyleSheet } from "react-native";
import { StatusType } from "./sharedTypes";
const { HS, VS } = scalingMethods;

const useSharedStyles = (currentStatus: StatusType) => {
  const colors = useTheme();
  const fontFamilyStyles = useFontStyles();

  const isAndroid = Platform.OS === "android";

  const colorMapping = {
    default: colors.border.default,
    focused: colors.primary.base,
    filled: colors.primary.base,
    error: colors.danger.base,
  };

  const statusColor = colorMapping[currentStatus];

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    fieldWrapper: {
      height: VS(52),
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      borderWidth: HS(1),
      borderColor: statusColor,
      borderRadius: radius.sm,
      gap: spacing.space8.width,
    },
    pressableWrapper: {
      alignSelf: "stretch",
    },
    dropdownValueText: {
      flex: 1,
    },
    dropdownOption: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: VS(45),
      borderBottomWidth: HS(1),
      borderBottomColor: colors.border.default,
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
  return { styles, colors, statusColor };
};

export default useSharedStyles;
