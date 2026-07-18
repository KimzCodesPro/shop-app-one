import { useTheme } from "@/hooks";
import { radius } from "@/src/constants";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { Size } from "./types";

const { HS, VS } = scalingMethods;

const useStyles = (size: Size) => {
  const colors = useTheme();

  const sizes = {
    sm: {
      width: HS(44),
      height: VS(44),
    },
    md: {
      width: HS(60),
      height: VS(60),
    },
    lg: {
      width: HS(120),
      height: VS(120),
    },
  };
  const styles = StyleSheet.create({
    container: {},
    img: {
      width: sizes[size].width,
      height: sizes[size].height,
      borderRadius: radius.full,
      overflow: "hidden",
    },
    uploaderRing: {
      position: "absolute",
      bottom: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
      width: HS(42),
      height: VS(42),
      borderRadius: radius.full,
      backgroundColor: colors.background.base,
    },
    uploader: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary.base,
      width: HS(36),
      height: VS(36),
      borderRadius: radius.full,
    },
  });

  return { styles, colors };
};

export default useStyles;
