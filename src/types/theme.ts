import colors from "../store/theme/colors.json";

export type ThemeColors = typeof colors;
export type Theme = "light" | "dark" | "system";

export type StatusVariant = "success" | "warning" | "danger" | "info";
