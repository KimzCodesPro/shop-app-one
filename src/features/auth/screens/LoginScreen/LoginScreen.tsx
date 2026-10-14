import {
  Button,
  IconButton,
  LanguageSwitcher,
  TextInput,
} from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";
import { Header } from "../../components";
import styles from "./loginScreenStyles";

const LoginScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const colors = useTheme();
  const forgotPasswordBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const sendCodeHandler = () => {
    forgotPasswordBottomSheetRef.current?.dismiss();
    router.push("/verification");
  };

  return (
    <>
      <ScreenLayout
        dismissKeyboardOnTap
        contentContainerStyle={styles.container}
      >
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
            onPress={() => forgotPasswordBottomSheetRef.current?.present()}
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
              onPress={() => router.push("/createAccount")}
              style={styles.secondActionCreateAccountButton}
            />
          </View>
        </View>
      </ScreenLayout>
      <BottomSheet
        ref={forgotPasswordBottomSheetRef}
        bottomSheetProps={{
          snapPoints: ["38%"],
        }}
        title={t("auth_forgotPasswordTitle")}
        description={t("auth_forgotPasswordSub")}
      >
        <BottomSheet.Content style={styles.forgotPasswordSheetContent}>
          <TextInput
            icon="mail"
            label={t("auth_fieldEmail")}
            placeholder={t("auth_placeholderEmail")}
            value=""
          />
          <Button
            title={t("auth_forgotPasswordSendCodeButton")}
            onPress={sendCodeHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default LoginScreen;
