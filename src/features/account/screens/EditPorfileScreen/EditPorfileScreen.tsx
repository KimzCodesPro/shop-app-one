import { userPlaceholder } from "@/assets/images";
import { Avatar } from "@/components/ui/display";
import { Button, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { View } from "react-native";
import styles from "./editPorfileScreenStyles";

const EditPorfileScreen = () => {
  const { t } = useTranslation();

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("account_profileTitle")} goBack />}
    >
      <Avatar
        size="lg"
        enableUploader
        imgSrc={userPlaceholder}
        style={styles.avatar}
      />
      <View style={styles.form}>
        <TextInput
          label={t("account_profileFieldUserName")}
          placeholder={t("account_placeholderUserName")}
          icon="user"
          value=""
        />
        <TextInput
          label={t("account_profileFieldEmail")}
          placeholder={t("account_placeholderEmail")}
          icon="mail"
          value=""
        />
        <TextInput
          label={t("account_profileFieldPhone")}
          placeholder={t("account_placeholderPhoneNumber")}
          icon="bell"
          value=""
        />
        <TextInput
          type="password"
          label={t("account_profileFieldConfirmPassword")}
          placeholder={t("account_placeholderPasswordToConfirm")}
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
