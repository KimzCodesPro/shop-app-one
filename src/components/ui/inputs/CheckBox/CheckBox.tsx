import Icon from "@/components/icons";
import { Pressable, View } from "react-native";
import { CheckBoxProps } from "./types";
import useStyles from "./useStyles";

const CheckBox = ({ isSelected, disabled, onChange, style }: CheckBoxProps) => {
  const { styles, colors } = useStyles(isSelected, disabled);

  return (
    <Pressable
      onPress={onChange}
      disabled={disabled}
      style={[styles.container, style]}
    >
      {isSelected && (
        <View style={styles.indicator}>
          <Icon name="check" size={16} color={colors.foreground.contrast} />
        </View>
      )}
    </Pressable>
  );
};

export default CheckBox;
