import { scalingMethods } from "../utils/";
const { HS, VS } = scalingMethods;

const spacing = {
  space4: {
    width: HS(4),
    height: VS(4),
  },
  space8: {
    width: HS(8),
    height: VS(8),
  },
  space12: {
    width: HS(12),
    height: VS(12),
  },
  space16: {
    width: HS(16),
    height: VS(16),
  },
  space20: {
    width: HS(20),
    height: VS(20),
  },
  space24: {
    width: HS(24),
    height: VS(24),
  },
  space32: {
    width: HS(32),
    height: VS(32),
  },
  space40: {
    width: HS(40),
    height: VS(40),
  },
  space48: {
    width: HS(48),
    height: VS(48),
  },
} as const;

export default spacing;
