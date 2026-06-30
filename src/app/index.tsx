import { Button } from "@/components/ui/inputs";
import { useUserPreferences } from "@/hooks";
import { Button as RNButton, StyleSheet, View } from "react-native";
const Index = () => {
  const { setTheme, setLanguage } = useUserPreferences();

  return (
    <View style={styles.container}>
      <Button
        disabled={true}
        size="lg"
        variant="danger"
        icon="eye"
        title="Custom Button"
        onPress={() => console.log("Button Pressed")}
        loading={{ indicator: false, text: "Loading..." }}
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default Index;
