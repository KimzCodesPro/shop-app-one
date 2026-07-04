import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type RadioProps = {
  isActive: boolean;
  onChange: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Radio = ({ isActive, onChange, disabled, style }: RadioProps) => {
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

export default Radio;
