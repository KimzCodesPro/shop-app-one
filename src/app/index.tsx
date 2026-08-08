import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { DismissKeyboard } from "../components/ui/layout";
const Index = () => {
  const router = useRouter();
  return (
    <DismissKeyboard style={styles.container}>
      <Pressable onPress={() => router.push("/(main)/(tabs)")}>
        <Text>go to main</Text>
      </Pressable>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
});

export default Index;
