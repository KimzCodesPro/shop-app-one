import { Pressable, View } from "react-native";
import { RadioProps } from "./types";
import useStyles from "./useStyles";

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
