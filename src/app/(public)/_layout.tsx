import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="createAccount" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="passwordChanged" />
    </Stack>
  );
};

export default PublicLayout;
