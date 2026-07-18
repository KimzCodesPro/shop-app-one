import { View } from "react-native";
import Avatar from "../Avatar/Avatar";
import Typography from "../Typography/Typography";
import { UserGreetingProps } from "./types";
import useStyles from "./useStyles";

const UserGreeting = ({ size, imgSrc, userName, meta }: UserGreetingProps) => {
  const { styles, colors } = useStyles();

  const TypographyMapping = {
    lg: {
      userName: {
        font: "mediumBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.tertiary,
      },
    },
    sm: {
      userName: {
        font: "normalBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.secondary,
      },
    },
  } as const;

  return (
    <View style={styles.container}>
      <Avatar imgSrc={imgSrc} size={size} />
      <View style={styles.userInfo}>
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
