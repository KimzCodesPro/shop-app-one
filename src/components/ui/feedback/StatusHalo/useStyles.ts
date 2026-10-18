import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types/theme";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { statusHaloColor } from "./helpers";
const { HS, VS } = scalingMethods;

const useStyles = (variant: StatusVariant) => {
  const colors = useTheme();
  const colorVariant = statusHaloColor(colors)[variant];

  const styles = StyleSheet.create({
    halo: {
      width: HS(130),
      height: VS(130),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colorVariant.halo,
    },
    inner: {
      width: HS(90),
      height: VS(90),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colorVariant.inner,
    },
  });

  return { styles, colors };
};

export default useStyles;
