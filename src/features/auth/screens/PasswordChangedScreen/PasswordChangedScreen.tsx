import { StatusHalo } from "@/components/ui/feedback";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { View } from "react-native";
import styles from "./passwordChangedScreenStyles";

const PasswordChangedScreen = () => {
  const colors = useTheme();
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScreenLayout horizontalCenterAlignment>
      <View style={styles.centerArea}>
        <StatusHalo variant="success" icon="check" />
        <View style={styles.containerInfo}>
          <Typography
            variant="largeBold"
            textAlign="center"
            color={colors.foreground.primary}
          >
            {t("auth_changePasswordSuccessTitle")}
          </Typography>
          <Typography
            variant="smallRegular"
            textAlign="center"
            color={colors.foreground.tertiary}
          >
            {t("auth_changePasswordSuccessDesc")}
          </Typography>
        </View>
      </View>
      <Button
        variant="primary"
        title={t("common_continue")}
        onPress={() => {
          router.replace("/login");
        }}
      />
    </ScreenLayout>
  );
};

export default PasswordChangedScreen;
