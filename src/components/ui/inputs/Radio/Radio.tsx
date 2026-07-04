import { Pressable, View } from "react-native";
import useStyles from "./useStyles";

type RadioProps = {
  isActive: boolean;
  onChange: () => void;
  disabled?: boolean;
};

const Radio = ({ isActive, onChange, disabled }: RadioProps) => {
  const { styles } = useStyles(isActive, disabled);

  return (
    <Pressable onPress={onChange} disabled={disabled} style={styles.container}>
      <View style={styles.indicator} />
    </Pressable>
  );
};

export default Radio;
