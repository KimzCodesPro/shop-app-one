import { View } from "react-native";
import { SwitchProps } from "./types";
import useStyles from "./useStyles";

const Switch = ({ isSelected, disabled, style }: SwitchProps) => {
  const { styles } = useStyles(isSelected, disabled);

  return (
    <View style={[styles.track, style]}>
      <View style={styles.indicator} />
    </View>
  );
};

export default Switch;
