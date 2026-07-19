import { View } from "react-native";
import Avatar from "../Avatar/Avatar";
import Typography from "../Typography/Typography";
import { UserGreetingProps } from "./types";
import useStyles from "./useStyles";

const UserGreeting = ({
  size,
  imgSrc,
  userName,
  meta,
  style,
}: UserGreetingProps) => {
  const { styles, TypographyMapping } = useStyles();

  return (
    <View style={[styles.container, style]}>
      <Avatar imgSrc={imgSrc} size={size} />
      <View>
        <Typography
          variant={TypographyMapping[size].userName.font}
          color={TypographyMapping[size].userName.color}
        >
          {userName}
        </Typography>
        <Typography
          variant={TypographyMapping[size].meta.font}
          color={TypographyMapping[size].meta.color}
        >
          {meta}
        </Typography>
      </View>
    </View>
  );
};

export default UserGreeting;
