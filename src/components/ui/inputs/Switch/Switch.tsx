import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type SwitchProps = {
  isActive: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

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
