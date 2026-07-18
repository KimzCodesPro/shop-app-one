import { UserGreeting } from "@/components/ui/display";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useRef } from "react";
import { Button as RNButton, StyleSheet, Text, View } from "react-native";
import { personTest } from "../assets/images";

const Index = () => {
  const BottomSheetREF = useRef<BottomSheetRef>(null);
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
      <UserGreeting
        imgSrc={personTest}
        size="sm"
        userName="Kareem"
        meta="Welcome back"
      />
      <RNButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <RNButton title="Light Mode" onPress={() => setTheme("light")} />
      <RNButton title="English" onPress={() => setLanguage("en")} />
      <RNButton title="Arabic" onPress={() => setLanguage("ar")} />
      <BottomSheet
        ref={BottomSheetREF}
        title="hello word"
        description="loem ispum dollar"
        bottomSheetProps={{
          snapPoints: ["10%", "40%", "60%"],
          index: -1,
          children: (
            <View>
              <Text>asdasd</Text>
            </View>
          ),
        }}
      />
    </View>
  );
};

export default Index;
