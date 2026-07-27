import { Pressable, View } from "react-native";
import { SwitchProps } from "./types";
import useStyles from "./useStyles";

const Switch = ({ isActive, onChange, disabled, style }: SwitchProps) => {
  const { styles } = useStyles(isActive, disabled);

  return (
    <Pressable
      onPress={onChange}
      disabled={disabled}
      style={[styles.container, style]}
    >
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Switch;
