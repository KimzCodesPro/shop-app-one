import { Accordion } from "@/components/ui/display";
import { StyleSheet } from "react-native";
import { DismissKeyboard } from "../components/ui/layout";

const Index = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      gap: 16,
    },
  });

  return (
    <DismissKeyboard style={styles.container}>
      <Accordion
        items={[
          { id: 1, title: "Item 1", content: "Content 1" },
          { id: 2, title: "Item 2", content: "Content 2" },
        ]}
      />
    </DismissKeyboard>
  );
};

export default Index;
