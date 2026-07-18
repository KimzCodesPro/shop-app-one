import Icon from "@/components/icons";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import useStyles from "./useStyles";

type CheckBoxProps = {
  isSelected: boolean;
  disabled?: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
};
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
