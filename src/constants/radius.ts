import { scalingMethods } from "@/utils";
export const { HS } = scalingMethods;

const radius = {
  xs: HS(4),
  sm: HS(8),
  md: HS(12),
  lg: HS(16),
  xl: HS(24),
  sheet: HS(28),
  "2xl": HS(30),
  full: 9999,
} as const;

export default radius;
