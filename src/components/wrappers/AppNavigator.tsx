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

  const isLoggedIn = true;

  return (
    <>
      {/* status bar style */}
      <StatusBar style={resolvedAppTheme === "dark" ? "light" : "dark"} />

      <ThemeProvider value={navigationTheme}>
        {/* navigation stack */}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(protected)" />
          </Stack.Protected>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(public)" />
          </Stack.Protected>
        </Stack>
      </ThemeProvider>
      {/* andriod navigation bar */}
      <NavigationBar style={resolvedAppTheme === "dark" ? "light" : "dark"} />
    </>
  );
};

export default AppNavigator;
