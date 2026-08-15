import { useTheme } from "@/hooks";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
const AppNavigator = () => {
  const colors = useTheme();

  const navigationTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.background.base },
  };

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(main)" />
      </Stack>
    </ThemeProvider>
  );
};

export default AppNavigator;
