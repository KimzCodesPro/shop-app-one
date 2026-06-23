import { Typography } from "@/components/ui/display";
import { useTheme, useUserPreferences } from "@/hooks";
import { Button, StyleSheet, View } from "react-native";

const Index = () => {
  const theme = useTheme();
  const { setTheme } = useUserPreferences();

  return (
    <View style={styles.container}>
      <Typography variant="heroRegular" color={theme.background.overlay}>
        كريم نور امام
      </Typography>
      <Button title="Dark Mode" onPress={() => setTheme("dark")} />
      <Button title="Light Mode" onPress={() => setTheme("light")} />
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
