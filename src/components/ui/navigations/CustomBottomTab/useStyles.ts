import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks/";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { HS, VS } = scalingMethods;

const useStyle = (isFocused?: boolean) => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  const focusedColor = isFocused
    ? colors.primary.base
    : colors.foreground.tertiary;

  const styles = StyleSheet.create({
    safeAreaView: {
      paddingBottom: insets.bottom,
    },
    tabBar: {
      // Bar height from the design. The safe area sits below it.
      height: VS(71),
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    tabItem: {
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.height,
      borderTopWidth: HS(2),
      borderTopColor: isFocused ? colors.primary.base : "transparent",
      paddingVertical: VS(12),
      width: "80%",
    },
    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
    },
    badge: {
      position: "absolute",
      top: -VS(5),
      end: -HS(12),
      width: HS(19),
      height: HS(19),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.danger.base,
    },
  });

  return {
    colors,
    styles,
    focusedColor,
  };
};
export default useStyle;
