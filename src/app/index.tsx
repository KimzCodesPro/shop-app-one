import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useRef } from "react";
import { Button as RNButton, StyleSheet, Text, View } from "react-native";

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
      <RNButton
        title="Open Bottom 1"
        onPress={() => BottomSheetREF.current?.snapToIndex(0)}
      />
      <RNButton
        title="Open Bottom 2"
        onPress={() => BottomSheetREF.current?.snapToIndex(1)}
      />
      <RNButton
        title="Open Bottom 3"
        onPress={() => BottomSheetREF.current?.snapToIndex(2)}
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
