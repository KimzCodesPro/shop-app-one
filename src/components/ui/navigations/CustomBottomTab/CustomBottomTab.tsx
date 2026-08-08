import { View, ViewProps } from "react-native";
import useStyles from "./useStyles";

const CustomBottomTab = ({ style, ...rest }: ViewProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.safeAreaView}>
      <View style={[style, styles.tabBar]} {...rest} />
    </View>
  );
};

export default CustomBottomTab;
