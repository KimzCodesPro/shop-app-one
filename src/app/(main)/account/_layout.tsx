import { Stack } from "expo-router";

const AccountLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="editProfile" />
    </Stack>
  );
};

export default AccountLayout;
