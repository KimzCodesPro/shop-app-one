import { Button, TextInput } from "@/components/ui/inputs";
import { useTranslation } from "@/hooks";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { View } from "react-native";
import styles from "./chnagePasswordStyles";

const ChangePasswordScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      dismissKeyboardOnTap
      renderTopBar={() => <TopBar title={t("account_rowChangePassword")} goBack />}
    >
      <View style={styles.form}>
        <TextInput
          type="password"
          label={t("account_currentPassword")}
          placeholder={t("account_placeholderCurrentPassword")}
          value=""
        />
        <TextInput
          type="password"
          label={t("account_newPassword")}
          placeholder={t("account_placeholderNewPassword")}
          value=""
        />
        <TextInput
          type="password"
          label={t("account_confirmPassword")}
          placeholder={t("account_placeholderConfirmPassword")}
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
