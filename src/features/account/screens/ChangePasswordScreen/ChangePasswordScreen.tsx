import { Button, TextInput } from "@/components/ui/inputs";
import { useTranslation } from "@/hooks";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { View } from "react-native";
import styles from "./chnagePasswordStyles";

const ChangePasswordScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      dismissKeyboardOnTap
      renderTopBar={() => <TopBar title={t("account_changePassword")} goBack />}
    >
      <View style={styles.form}>
        <TextInput
          type="password"
          label={t("account_currentPassword")}
          placeholder={t("account_currentPasswordPlaceholder")}
          value=""
        />
        <TextInput
          type="password"
          label={t("account_newPassword")}
          placeholder={t("account_newPasswordPlaceholder")}
          value=""
        />
        <TextInput
          type="password"
          label={t("account_confirmPassword")}
          placeholder={t("account_confirmPasswordPlaceholder")}
          value=""
        />
      </View>

      <Button
        title={t("common_save")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default ChangePasswordScreen;
