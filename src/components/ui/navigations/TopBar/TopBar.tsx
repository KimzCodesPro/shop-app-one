import Icon from "@/components/icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import ICON_SIZE from "./constant";
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
    <View style={styles.safeAreaView}>
      <View style={styles.container}>
        {goBack || hasForceBack ? (
          <Pressable onPress={handleGoBack} style={styles.slot}>
            <Icon
              name="chevron-left"
              size={ICON_SIZE}
              color={colors.foreground.primary}
              flipOnRTL
            />
          </Pressable>
        ) : (
          <View style={styles.slot} />
        )}

        <Typography
          variant="mediumBold"
          color={colors.foreground.primary}
          textTransform="capitalize"
        >
          {title}
        </Typography>
        {actionBtn ? (
          <Pressable onPress={actionBtn.onPress} style={styles.slot}>
            <Icon
              name={actionBtn.iconName}
              size={ICON_SIZE}
              color={colors.foreground.primary}
              flipOnRTL={actionBtn?.flipOnRTL}
            />
          </Pressable>
        ) : (
          <View style={styles.slot} />
        )}
      </View>
    </View>
  );
};

export default TopBar;
