import { userPlaceholder } from "@/src/assets/images";
import { Avatar } from "@/src/components/ui/display";
import { Button, TextInput } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { useTranslation } from "@/src/hooks";
import { View } from "react-native";
import styles from "./EditPorfileScreenStyles";

const EditPorfileScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("account_editProfile")} goBack />}
    >
      <Avatar
        size="lg"
        enableUploader
        imgSrc={userPlaceholder}
        style={styles.avatar}
      />
      <View style={styles.form}>
        <TextInput
          label={t("account_username")}
          placeholder={t("account_usernamePlaceholder")}
          iconName="user"
          value=""
        />
        <TextInput
          label={t("account_email")}
          placeholder={t("account_emailPlaceholder")}
          iconName="mail"
          value=""
        />
        <TextInput
          label={t("account_phoneNumber")}
          placeholder={t("account_phoneNumberPlaceholder")}
          iconName="bell"
          value=""
        />
        <TextInput
          type="password"
          label={t("account_passwordToConfirm")}
          placeholder={t("account_passwordToConfirmPlaceholder")}
          value=""
        />
      </View>
      <Button
        style={styles.submitButton}
        title={t("account_saveChanges")}
        onPress={() => {}}
      />
    </ScreenLayout>
  );
};

export default EditPorfileScreen;
