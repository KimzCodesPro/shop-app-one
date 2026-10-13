import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";
import { DOT_DEFAULT_SIZE, DOT_SIZES } from "./constants";
import { PaginationDotType } from "./types";

const useStyles = (type: PaginationDotType) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    dot: {
      height: DOT_DEFAULT_SIZE,
      width: DOT_DEFAULT_SIZE,
      borderRadius: radius.full,
      backgroundColor: colors.border.default,
    },
    activeDot: {
      backgroundColor: colors.primary.base,
      ...DOT_SIZES[type],
    },
  });
  return { styles, colors };
};

export default useStyles;
