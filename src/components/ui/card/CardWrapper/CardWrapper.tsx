import { View } from "react-native";
import { CardWrapperProps } from "./types";
import useStyles from "./useStyles";

const CardWrapper = ({ children, style }: CardWrapperProps) => {
  const { styles } = useStyles();

  return <View style={[styles.container, style]}>{children}</View>;
};

export default CardWrapper;
