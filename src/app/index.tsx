import { TopBar } from "@/components/ui/navigations";
import { useTheme, useUserPreferences } from "@/hooks";
import { Button as RNButton, StyleSheet, View } from "react-native";

const Index = () => {
  const colors = useTheme();
  const { setTheme, setLanguage } = useUserPreferences();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      backgroundColor: colors.background.base,
    },
  });

  const topBarActionHandler = () => {};

  return (
    <View style={styles.container}>
      <TopBar
        title="account page"
        goBack
        forceBack="/"
        actionBtn={{
          iconName: "check",
          onPress: topBarActionHandler,
          flipOnRTL: false,
        }}
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;
