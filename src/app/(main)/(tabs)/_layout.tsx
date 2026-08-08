import {
  CustomBottomTab,
  CustomBottomTabButton,
} from "@/src/components/ui/navigations";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTab>
          <TabTrigger name="index" href="/" asChild>
            <CustomBottomTabButton label="home" iconName="home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTabButton label="my order" iconName="truck" />
          </TabTrigger>
          <TabTrigger name="myCard" href="/myCard" asChild>
            <CustomBottomTabButton
              label="my card"
              iconName="shopping-cart"
              badge={9}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton label="account" iconName="user" />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
}
