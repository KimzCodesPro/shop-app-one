import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CONTENT_BOTTOM_GAP, SIDE_PADDING, TOP_BAR_GAP } from "./constant";
import { UseStylesArgs } from "./types";

const useStyles = ({ hasTopBar, hasTabBar, paddingSides }: UseStylesArgs) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  const paddingTop = hasTopBar ? 0 : insets.top;
  const paddingBottom = hasTabBar ? 0 : insets.bottom;

  const horizontalPadding = SIDE_PADDING[paddingSides];

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
    container: {
      flex: 1,
    },
  });

  return {
    colors,
    styles,
  };
};

export default useStyles;
