import { Stack } from "expo-router";

const AccountLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="changePassword" />
    </Stack>
  );
};

export default AccountLayout;
