import {
  Button,
  IconButton,
  LanguageSwitcher,
  TextInput,
} from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { router } from "expo-router";
import { View } from "react-native";
import { Header } from "../../components";
import styles from "./loginScreenStyles";

const LoginScreen = () => {
  const { t } = useTranslation();
  const colors = useTheme();

  return (
    <ScreenLayout contentContainerStyle={styles.container}>
      <LanguageSwitcher style={styles.languageSwitcher} />
      <Header title={t("auth_loginTitle")} subtitle={t("auth_loginSub")} />
      <View style={styles.formContainer}>
        <TextInput
          icon="mail"
          label={t("auth_fieldEmail")}
          placeholder={t("auth_placeholderEmail")}
          value=""
        />
        <TextInput
          type="password"
          label={t("auth_fieldPassword")}
          placeholder={t("auth_placeholderPassword")}
          value=""
        />
        <Button
          title={t("auth_forgotPasswordLink")}
          variant="link"
          size="sm"
          onPress={() => {}}
          style={styles.forgotPasswordButton}
        />
      </View>
      <View style={styles.actions}>
        <View style={styles.mainActionRow}>
          <Button
            title={t("auth_signInButton")}
            onPress={() => {}}
            style={styles.mainActionSignInButton}
          />
          <IconButton icon="biometric" onPress={() => {}} />
        </View>
        <View style={styles.secondActionRow}>
          <Typography
            variant="smallRegular"
            color={colors.foreground.secondary}
          >
            {t("auth_noAccountLabel")}
          </Typography>
          <Button
            title={t("auth_createAccountTitle")}
            variant="link"
            size="sm"
            onPress={() => router.replace("/createAccount")}
            style={styles.secondActionCreateAccountButton}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;
