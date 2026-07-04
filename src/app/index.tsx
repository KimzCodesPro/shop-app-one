import Icon from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Button as RNButton, StyleSheet, View } from "react-native";

const Index = () => {
  const colors = useTheme();
  const { setTheme, setLanguage } = useUserPreferences();
  const [stateOne, setStateOne] = useState(1);
  const [stateTwo, setStateTwo] = useState(1);

  const test = () => {
    setStateOne(stateOne + 1);
  };

  const testTwo = () => {
    setStateTwo(stateTwo + 1);
  };

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
      <Typography variant="heroBold" textTransform="lowercase">
        Hello wORD
      </Typography>
      <Icon name="chevron" flip />
      <Button
        size="lg"
        variant="ghost"
        icon="eye"
        title="Custom Button"
        onPress={test}
        loading={{ indicator: false, text: "Loading..." }}
      />
      <Button
        size="lg"
        variant="danger"
        icon="eye"
        title="Custom Button"
        onPress={testTwo}
        loading={{ indicator: false, text: "Loading..." }}
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;
