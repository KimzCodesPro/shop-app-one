import { Typography } from "@/components/ui/display";
import { StyleSheet, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heroRegular">كريم نور امام</Typography>
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
