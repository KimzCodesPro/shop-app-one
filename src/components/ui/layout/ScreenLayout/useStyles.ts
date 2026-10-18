import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CONTENT_BOTTOM_GAP, SIDE_PADDING, TOP_BAR_GAP } from "./constant";
import { UseStylesArgs } from "./types";

const useStyles = ({
  hasTopBar,
  hasTabBar,
  paddingSides,
  horizontalCenterAlignment,
  verticalCenterAlignment,
}: UseStylesArgs) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  const paddingTop = hasTopBar ? 0 : insets.top;
  const paddingBottom = hasTabBar ? 0 : insets.bottom;

  const horizontalPadding = SIDE_PADDING[paddingSides];

  const horizontalAlignment =
    horizontalCenterAlignment === true ? "center" : "stretch";
  const verticalAlignment =
    verticalCenterAlignment === true ? "center" : "flex-start";

  const styles = StyleSheet.create({
    viewWrapper: {
      ...horizontalPadding,
      paddingTop,
      paddingBottom: paddingBottom + CONTENT_BOTTOM_GAP,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    scrollViewWrapper: {
      ...horizontalPadding,
      paddingTop,
      paddingBottom,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
    viewContent: {
      flex: 1,
      alignItems: horizontalAlignment,
      justifyContent: verticalAlignment,
    },
    scrollContent: {
      flexGrow: 1,
      alignItems: horizontalAlignment,
      justifyContent: verticalAlignment,
    },
  });

  return {
    colors,
    styles,
  };
};

export default useStyles;
