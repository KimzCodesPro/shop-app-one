import Icon from "@/components/icons";
import { Pressable, View } from "react-native";
import useStyles from "./useStyles";

type CheckBoxProps = {
  isActive: boolean;
  disabled?: boolean;
  onChange: () => void;
};
const CheckBox = ({ isActive, disabled, onChange }: CheckBoxProps) => {
  const { styles, colors } = useStyles(isActive, disabled);

  return (
    <Pressable onPress={onChange} disabled={disabled} style={styles.container}>
      <View style={styles.indicator}>
        <Icon name="check" size={16} color={colors.fg.contrast} />
      </View>
    </Pressable>
  );
};

export default CheckBox;
