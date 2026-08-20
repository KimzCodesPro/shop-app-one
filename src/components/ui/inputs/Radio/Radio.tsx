import { View } from "react-native";
import { RadioProps } from "./types";
import useStyles from "./useStyles";

const Radio = ({ isSelected, disabled, style }: RadioProps) => {
  const { styles } = useStyles(isSelected, disabled);

  return (
    <View style={[styles.indicator, style]}>
      <View style={styles.innerIndicator} />
    </View>
  );
};

export default Radio;
