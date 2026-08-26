import { Stack } from "expo-router";

const AccountLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="changePassword" />
      <Stack.Screen name="helpAndSupport" />
    </Stack>
  );
};

export default AccountLayout;
