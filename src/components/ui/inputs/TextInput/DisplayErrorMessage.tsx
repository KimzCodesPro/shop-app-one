import { Typography } from "@/components/ui/display";
import { View } from "react-native";
import useStyles from "./useStyles";

type DisplayErrorMessageProps = {
  errorMessage?: string;
};

const DisplayErrorMessage = ({ errorMessage }: DisplayErrorMessageProps) => {
  const { styles, colors } = useStyles();

  if (!errorMessage) return null;

  return (
    <View style={styles.errorMessage}>
      <Typography variant="smallRegular" color={colors.danger.base}>
        {errorMessage}
      </Typography>
    </View>
  );
};

export default DisplayErrorMessage;
