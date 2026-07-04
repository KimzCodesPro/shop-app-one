import { RowNav } from "@/components/ui/navigations";
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

  return (
    <View style={styles.container}>
      <RowNav
        onPress={() => {}}
        variant="danger"
        title="logout"
        icon="eye"
        trailing="chevronWithValue"
        trailingValue="value"
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;
