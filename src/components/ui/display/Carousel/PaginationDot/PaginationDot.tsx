import { Pressable } from "react-native";
import { PaginationDotProps } from "./types";
import useStyles from "./useStyles";

const PaginationDot = ({ active, type, onPress }: PaginationDotProps) => {
  const { styles } = useStyles(type);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.dot, active && styles.activeDot]}
    />
  );
};

export default PaginationDot;
