import { scalingMethods } from "@/utils";
const { HS, VS } = scalingMethods;

export const DOT_DEFAULT_SIZE = HS(8);

export const DOT_SIZES = {
  pill: { width: HS(24), height: VS(8) },
  circle: { width: HS(8), height: VS(8) },
};
