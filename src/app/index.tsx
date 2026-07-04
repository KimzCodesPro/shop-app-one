import { Radio } from "@/components/ui/inputs";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Button as RNButton, StyleSheet, View } from "react-native";

const radioOptionsInit = {
  option1: false,
  option2: false,
  option3: false,
};
const Index = () => {
  const colors = useTheme();
  const { setTheme, setLanguage } = useUserPreferences();

  const [onChange, setOnChange] = useState(radioOptionsInit);

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
      <Radio
        isActive={onChange.option1}
        onChange={() => {
          setOnChange({
            ...radioOptionsInit,
            option1: !onChange.option1,
          });
        }}
      />
      <Radio
        isActive={onChange.option2}
        onChange={() => {
          setOnChange({
            ...radioOptionsInit,
            option2: !onChange.option2,
          });
        }}
      />
      <Radio
        isActive={onChange.option3}
        onChange={() => {
          setOnChange({
            ...radioOptionsInit,
            option3: !onChange.option3,
          });
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
