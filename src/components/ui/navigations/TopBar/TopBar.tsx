import Icon from "@/components/icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import { TopBarProps } from "./types";
import useStyles from "./useStyles";

const TopBar = ({ title, goBack, forceBack, actionBtn }: TopBarProps) => {
  const router = useRouter();
  const { styles, colors } = useStyles();

  const hasForceBack = !!forceBack;

  const handleGoBack = () => {
    if (forceBack) {
      router.push(forceBack);
    } else {
      if (router.canGoBack()) {
        router.back();
      }
    }
  };

  return (
    <View style={styles.container}>
      {goBack || hasForceBack ? (
        <Pressable onPress={handleGoBack}>
          <Icon
            name="chevron"
            size={22}
            color={colors.foreground.primary}
            flipOnRTL
          />
        </Pressable>
      ) : (
        <View />
      )}

      <Typography
        variant="mediumBold"
        color={colors.foreground.primary}
        textTransform="capitalize"
      >
        {title}
      </Typography>
      {actionBtn ? (
        <Pressable onPress={actionBtn.onPress}>
          <Icon
            name={actionBtn.iconName}
            size={22}
            color={colors.foreground.primary}
            flipOnRTL={actionBtn?.flipOnRTL}
          />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
};

export default TopBar;
