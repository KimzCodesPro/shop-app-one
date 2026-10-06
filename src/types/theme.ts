import colors from "../store/theme/colors.json";

export type Theme = "light" | "dark" | "system";

export type ThemeColors = typeof colors;

export type ThemePalette = ThemeColors["light"];

export type StatusVariant = "success" | "warning" | "danger" | "info";
