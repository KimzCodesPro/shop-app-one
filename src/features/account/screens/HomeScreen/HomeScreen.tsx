import { userPlaceholder } from "@/src/assets/images";
import { UserGreeting } from "@/src/components/ui/display";
import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { BottomSheet, Modal } from "@/src/components/ui/overlay";
import { View } from "react-native";
import NavigationList from "./components/NavigationList";
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
      <BottomSheet
        ref={languageBottomSheetRef}
        title={t("account_language")}
        bottomSheetProps={{ snapPoints: ["25%"] }}
      >
        <BottomSheet.Content></BottomSheet.Content>
      </BottomSheet>

      <BottomSheet
        ref={themeBottomSheetRef}
        title={t("account_theme")}
        bottomSheetProps={{ snapPoints: ["35%"] }}
      >
        <BottomSheet.Content></BottomSheet.Content>
      </BottomSheet>

      <BottomSheet
        ref={notificationsBottomSheetRef}
        title={t("account_notifications")}
        bottomSheetProps={{ snapPoints: ["20%"] }}
      >
        <BottomSheet.Content></BottomSheet.Content>
      </BottomSheet>

      {/* logout modal */}
      <Modal title="Are you sure you want to logout?" visible={logoutVisible}>
        <View>
          <Button
            title={t("common_cancel")}
            onPress={() => setLogoutVisible(false)}
          />
          <Button
            variant="danger"
            title={t("account_logout")}
            onPress={() => setLogoutVisible(false)}
          />
        </View>
      </Modal>
    </ScreenLayout>
  );
};

export default HomeScreen;
