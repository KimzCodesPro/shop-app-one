import Icon from "@/components/icons";
import { View } from "react-native";
import { HALO_ICON_SIZE } from "./constants";
import { StatusHaloProps } from "./types";
import useStyles from "./useStyles";

const StatusHalo = ({ variant = "info", icon, style }: StatusHaloProps) => {
  const { styles, colors } = useStyles(variant);

  return (
    <View style={[style, styles.halo]}>
      <View style={styles.inner}>
        <Icon
          name={icon}
          color={colors.foreground.contrast}
          size={HALO_ICON_SIZE}
        />
      </View>
    </View>
  );
};

export default StatusHalo;
