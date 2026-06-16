import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
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
