import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    backDrop: {
      backgroundColor: colors.background.overlay,
    },
    bottomSheet: {
      backgroundColor: colors.background.base,
      borderRadius: radius.sheet,
      shadowColor: colors.misc.shadow,
      shadowOffset: {
        width: 0,
        height: -VS(4),
      },
      shadowOpacity: 0.08,
      shadowRadius: HS(16),
      elevation: 8,
    },
    handleIndicatorStyle: {
      width: spacing.space48.width,
      height: spacing.space4.height,
      backgroundColor: colors.border.default,
    },
    handleStyle: {
      paddingTop: spacing.space12.height,
      paddingBottom: 0,
    },
    header: {
      alignItems: "center",
      paddingHorizontal: spacing.space24.width,
      paddingTop: spacing.space24.height,
    },
    // The scrollable is a DIRECT child of BottomSheet (gorhom requirement: a
    // scrollable nested inside a wrapper View won't scroll). So its own `style`
    // owns the flex sizing and its contentContainerStyle owns the padding.
    content: {
      flex: 1,
      marginTop: spacing.space16.height,
    },
    // gorhom applies no safe area of its own, and the sheet sits flush against
    // the bottom of the screen at every snap point — so the home indicator's
    // inset goes on top of the design padding, or it overlaps the last item.
    contentContainer: {
      paddingHorizontal: spacing.space24.width,
      paddingBottom: spacing.space24.height,
    },
    title: {
      color: colors.foreground.primary,
    },
    description: {
      marginTop: spacing.space8.height,
      color: colors.foreground.secondary,
    },
  });
  return { colors, styles };
};

export default useStyles;
