import { FormInput } from "@/components/ui/inputs";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Button as RNButton, StyleSheet, View } from "react-native";

const Index = () => {
  const [userName, setUserName] = useState("");
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

  const insertUserName = (text: string) => {
    setUserName(text);
  };

  return (
    <View style={styles.container}>
      <FormInput
        type="text"
        iconName="building"
        label="User Name"
        placeHolder="Inser User Name"
        clearInput={() => setUserName("")}
        value={userName}
        onChangeText={insertUserName}
      />
      <FormInput
        type="password"
        label="Email Name"
        placeHolder="Inser Email Name"
        errorMessage="there is error"
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;
