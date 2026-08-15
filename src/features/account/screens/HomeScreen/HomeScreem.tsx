import { userPlaceholder } from "@/src/assets/images";
import { UserGreeting } from "@/src/components/ui/display";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import NavigationList from "./components/NavigationList";
import useHomeScreen from "./useHomeScreen";

const HomeScreem = () => {
  const { pageNavigationList } = useHomeScreen();

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

      <NavigationList navigationList={pageNavigationList} />
    </ScreenLayout>
  );
};

export default HomeScreem;
