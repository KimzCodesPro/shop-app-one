import { Modal } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useState } from "react";
import { Button as RNButton, StyleSheet, View } from "react-native";

const Index = () => {
  const [modalVisiable, setVisible] = useState(false);
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
      <Modal
        title="Modal Title"
        description="this is descriptin"
        visible={modalVisiable}
        closeModal={() => setVisible(false)}
        renderItem={() => (
          <>
            <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
            <RNButton title="Light Mode" onPress={() => setTheme("light")} />
          </>
        )}
      />
      <RNButton title="Show Modal" onPress={() => setVisible(true)} />

      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;
