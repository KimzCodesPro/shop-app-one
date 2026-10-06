import {
  CustomBottomTab,
  CustomBottomTabButton,
} from "@/src/components/ui/navigations";
import { useTranslation } from "@/src/hooks";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTab>
          <TabTrigger name="index" href="/" asChild>
            <CustomBottomTabButton label={t("bottomTab_home")} iconName="home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTabButton
              label={t("bottomTab_myOrder")}
              iconName="truck"
            />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomBottomTabButton
              label={t("bottomTab_myCard")}
              iconName="shopping-cart"
              badge={9}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton
              label={t("bottomTab_account")}
              iconName="user"
            />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
}
