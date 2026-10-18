import {
  CustomBottomTab,
  CustomBottomTabButton,
} from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTab>
          <TabTrigger name="index" href="/" asChild>
            <CustomBottomTabButton label={t("common_bottomTabHome")} iconName="home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTabButton
              label={t("common_bottomTabMyOrder")}
              iconName="truck"
            />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomBottomTabButton
              label={t("common_bottomTabMyCart")}
              iconName="shopping-cart"
              badge={9}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton
              label={t("common_bottomTabAccount")}
              iconName="user"
            />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
}
