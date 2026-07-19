import { Pressable, View } from "react-native";
import Typography from "../Typography/Typography";
import {
  InfoCardLeadingProps,
  InfoCardProps,
  InfoCardTrailingProps,
} from "./types";
import useStyles from "./useStyles";

const InfoCardLeading = ({ title, description }: InfoCardLeadingProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.leading}>
      <Typography variant="smallBold" style={styles.leadingTitle}>
        {title}
      </Typography>
      <Typography variant="xsmallRegular" style={styles.leadingDescription}>
        {description}
      </Typography>
    </View>
  );
};

const InfoCardTrailing = ({ children }: InfoCardTrailingProps) => {
  const { styles } = useStyles();
  return <View style={styles.trailing}>{children}</View>;
};

const InfoCard = ({ children, isSelected, onPress, style }: InfoCardProps) => {
  const { styles } = useStyles(isSelected);

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {children}
    </Pressable>
  );
};

InfoCard.Leading = InfoCardLeading;
InfoCard.Trailing = InfoCardTrailing;
export default InfoCard;
