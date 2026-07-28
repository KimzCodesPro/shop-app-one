import { Dropdown, TextInput } from "@/components/ui/inputs";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useTheme, useUserPreferences } from "@/hooks";
import { useRef, useState } from "react";
import { Button as RNButton, StyleSheet, Text, View } from "react-native";
import { DismissKeyboard } from "../components/ui/layout";

const Index = () => {
  const BottomSheetREF = useRef<BottomSheetRef>(null);
  const colors = useTheme();

  const { setTheme, setLanguage } = useUserPreferences();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      gap: 16,
      backgroundColor: colors.background.base,
    },
  });

  return (
    <DismissKeyboard style={styles.container}>
      <TextInput
        label="Full name"
        placeholder="Enter your full name"
        iconName="user"
        value={fullName}
        onChangeText={setFullName}
        clearInput={() => setFullName("")}
      />

      <TextInput
        label="Address"
        placeholder="Enter your address"
        iconName="map-pin"
        value={address}
        onChangeText={setAddress}
        errorMessage={
          address.length > 0 && address.length < 5
            ? "Address is too short"
            : undefined
        }
        clearInput={() => setAddress("")}
      />

      <Dropdown
        label="City"
        placeholder="Select your city"
        iconName="building"
        value={city}
        onSelect={setCity}
        options={[
          { label: "Cairo", value: "cairo" },
          { label: "Alexandria", value: "alexandria" },
          { label: "Giza", value: "giza" },
        ]}
      />

      <TextInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />

      <RNButton
        title="open bottom sheet"
        onPress={() => BottomSheetREF.current?.expand()}
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
        }}
      >
        <BottomSheet.Content>
          <View>
            <Text>asdasd</Text>
          </View>
        </BottomSheet.Content>
      </BottomSheet>
    </DismissKeyboard>
  );
};

export default Index;
