import { Typography } from "@/components/ui/display";
import { useTheme, useTranslation, useUserPreferences } from "@/hooks";
import { Button, StyleSheet, View } from "react-native";

const Index = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { setTheme, setLanguage } = useUserPreferences();
  return (
    <View style={styles.container}>
      <Typography variant="heroRegular" color={theme.background.overlay}>
        {t("welcome", { name: "ahmed", age: 25 })}
      </Typography>
      {/* <Icon
        name="chevron"
        size={24}
        color={theme.background.overlay}
        isRTL={isRTL}
      /> */}
      <Button title="Dark Mode" onPress={() => setTheme("dark")} />
      <Button title="Light Mode" onPress={() => setTheme("light")} />
      <Button title="English" onPress={() => setLanguage("en")} />
      <Button title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
