import { TextInput } from "@/components/ui/inputs";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Button as RNButton, StyleSheet, View } from "react-native";
const Index = () => {
  const colors = useTheme();
  const { setTheme, setLanguage } = useUserPreferences();
  const [userName, setUserName] = useState("");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      backgroundColor: colors.background.base,
    },
  });

  const userNameOnChange = (text: string) => {
    setUserName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        type="text"
        label="User Name"
        icon="user"
        placeholder="Insert User Name"
        value={userName}
        onChange={userNameOnChange}
        onClearInput={() => setUserName("")}
        errorMessage="this invalid"
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;
