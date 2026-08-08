import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { Text } from "react-native";

const HomePage = () => {
  return (
    <ScreenLayout hasTabBar renderTopBar={() => <TopBar title="Home" />}>
      <Text>index</Text>
    </ScreenLayout>
  );
};

export default HomePage;
