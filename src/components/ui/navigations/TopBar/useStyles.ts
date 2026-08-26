import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GLYPH_INSET, ICON_SIZE } from "./constant";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    safeAreaView: {
      paddingTop: insets.top,
    },
    container: {
      height: VS(50),
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    slot: {
      width: HS(ICON_SIZE),
      justifyContent: "center",
    },
    backSlot: {
      alignItems: "flex-start",
      marginStart: -HS(GLYPH_INSET),
    },
    actionSlot: {
      alignItems: "flex-end",
      marginEnd: HS(GLYPH_INSET),
    },
  });

  return { colors, styles };
};

export default useStyles;
