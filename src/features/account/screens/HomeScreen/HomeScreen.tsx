import { userPlaceholder } from "@/src/assets/images";
import { UserGreeting } from "@/src/components/ui/display";
import { Button, RadioGroup, SwitchGroup } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { BottomSheet, Modal } from "@/src/components/ui/overlay";
import { View } from "react-native";
import NavigationList from "./components/NavigationList/NavigationList";
import ThemeRadioGroup from "./components/ThemeRadioGroup/ThemeRadioGroup";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const {
    t,
    pageNavigationList,
    logoutVisible,
    setLogoutVisible,
    languageBottomSheetRef,
    themeBottomSheetRef,
    notificationsBottomSheetRef,
    languageOptions,
    selectedLanguage,
    onSelectLanguage,
    onToggleNotification,
    themeOptions,
    selectedTheme,
    onSelectTheme,
    notificationOptions,
  } = useHomeScreen();

  return (
    <ScreenLayout
      scrollable
      hasTabBar
      renderTopBar={() => <TopBar title="Account" />}
    >
      <UserGreeting
        size="lg"
        imgSrc={userPlaceholder}
        userName="John Doe"
        meta="kareem@gmail.com"
      />
      {/* row navigation list  */}
      <NavigationList navigationList={pageNavigationList} />

      {/* bottomsheets */}
      {/* language bottom sheet */}
      <BottomSheet
        ref={languageBottomSheetRef}
        title={t("account_language")}
        bottomSheetProps={{ snapPoints: ["28%"] }}
      >
        <BottomSheet.Content>
          <RadioGroup
            options={languageOptions}
            selectedValue={selectedLanguage}
            onValueChange={onSelectLanguage}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* theme  Bottom Sheet */}
      <BottomSheet
        ref={themeBottomSheetRef}
        title={t("account_theme")}
        bottomSheetProps={{ snapPoints: ["39%"] }}
      >
        <BottomSheet.Content>
          <ThemeRadioGroup
            options={themeOptions}
            selectedValue={selectedTheme}
            onValueChange={onSelectTheme}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* notifications Bottom Sheet*/}
      <BottomSheet
        ref={notificationsBottomSheetRef}
        title={t("account_notifications")}
        bottomSheetProps={{ snapPoints: ["19%"] }}
      >
        <BottomSheet.Content>
          <SwitchGroup
            options={notificationOptions}
            onValueChange={onToggleNotification}
          />
        </BottomSheet.Content>
      </BottomSheet>

      {/* logout modal */}
      <Modal title="Are you sure you want to logout?" visible={logoutVisible}>
        <View>
          <Button
            title={t("common_cancel")}
            onPress={() => setLogoutVisible(false)}
          />
          <Button
            variant="link-danger"
            title={t("account_logout")}
            onPress={() => setLogoutVisible(false)}
          />
        </View>
      </Modal>
    </ScreenLayout>
  );
};

export default HomeScreen;
