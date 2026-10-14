import { StatusHalo } from "@/components/ui/feedback";
import { Button, OtpInput, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { Typography } from "@/components/ui/typography";
import { useTheme, useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";
import styles from "./verificationScreenStyles";

const VerificationScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const colors = useTheme();
  const changePasswordSheetRef = useRef<BottomSheetRef | null>(null);

  return (
    <>
      <ScreenLayout
        dismissKeyboardOnTap
        horizontalCenterAlignment
        verticalCenterAlignment
        renderTopBar={() => (
          <TopBar title={t("auth_verificationTitle")} goBack />
        )}
      >
        <StatusHalo icon="mail-opened" />
        <View style={styles.infoContainer}>
          <Typography
            textAlign="center"
            variant="largeBold"
            color={colors.foreground.primary}
            style={styles.infoContainerHeader}
          >
            {t("auth_verificationSub")}
          </Typography>
          <Typography
            textAlign="center"
            variant="smallRegular"
            color={colors.foreground.tertiary}
          >
            {t("auth_verificationDesc")}
          </Typography>
          <Typography
            textAlign="center"
            variant="smallRegular"
            color={colors.foreground.primary}
          >
            magdalena83@mail.com
          </Typography>
        </View>
        <OtpInput
          verifyFailed={false}
          onFocus={() => {
            console.log("OtpInput focused");
          }}
          onBlur={() => {
            console.log("OtpInput blurred");
          }}
          onTextChange={() => {
            console.log("OtpInput text changed");
          }}
          onFilled={() => {
            console.log("OtpInput filled");
          }}
        />
        <View style={styles.actionRow}>
          <Typography
            variant="smallRegular"
            color={colors.foreground.secondary}
          >
            {t("auth_verificationDidntReceive")}
          </Typography>
          <Button
            variant="link"
            size="sm"
            onPress={() => console.log("Resend OTP")}
            title={t("auth_verificationResend")}
            style={styles.resendButton}
          />
        </View>
        <Button
          style={styles.submitButton}
          variant="primary"
          onPress={() => changePasswordSheetRef.current?.present()}
          title={t("auth_verificationSubmit")}
        />
      </ScreenLayout>
      <BottomSheet
        ref={changePasswordSheetRef}
        title={t("auth_newPasswordTitle")}
        description={t("auth_newPasswordSub")}
        bottomSheetProps={{
          snapPoints: ["50%"],
        }}
        backDropPressBehavior="none"
      >
        <BottomSheet.Content style={styles.bottomSheetContent}>
          <TextInput
            type="password"
            label={t("auth_fieldNewPassword")}
            placeholder={t("auth_placeholderNewPassword")}
            value=""
          />
          <TextInput
            type="password"
            label={t("auth_fieldConfirmPassword")}
            placeholder={t("auth_placeholderConfirmPassword")}
            value=""
          />
          <Button
            style={styles.changePasswordButton}
            variant="primary"
            onPress={() => {
              changePasswordSheetRef.current?.dismiss();
              router.replace("/passwordChanged");
            }}
            title={t("auth_changePasswordTitle")}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export default VerificationScreen;
