import { useTheme, useUserPreferences } from "@/hooks";
import { NavigationBar } from "expo-navigation-bar";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AppNavigator = () => {
  const colors = useTheme();
  const { resolvedAppTheme } = useUserPreferences();

  const navigationTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.background.base },
  };

  return (
    <>
      <StatusBar style={resolvedAppTheme === "dark" ? "light" : "dark"} />
      <ThemeProvider value={navigationTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(protected)" />
        </Stack>
      </ThemeProvider>
      <NavigationBar style={resolvedAppTheme === "dark" ? "light" : "dark"} />
    </>
  );
};

export default AppNavigator;
