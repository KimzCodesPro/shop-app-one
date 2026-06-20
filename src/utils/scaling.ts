import { Dimensions } from "react-native";

type ScalingMethods = {
  HS: (size: number) => number;
  VS: (size: number) => number;
  FS: (size: number, factor?: number) => number;
};

let scalingMethods = {} as ScalingMethods;

const guideLineBaseWidth = 375;
const guideLineBaseHeight = 812;

const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// ============================================================================
// HS — HORIZONTAL SCALE  (think: LEFT ↔ RIGHT)
// ============================================================================
// Scales values based on the device's WIDTH relative to the mockup width.
//
// ✅ USE FOR:
//   • width                              → width: HS(200)
//   • paddingHorizontal                  → paddingHorizontal: HS(16)
//   • paddingLeft / paddingRight         → paddingLeft: HS(16)
//   • marginHorizontal                   → marginHorizontal: HS(20)
//   • marginLeft / marginRight           → marginLeft: HS(16)
//   • left / right (absolute position)   → left: HS(10)
//   • gap (in flexDirection: 'row')      → gap: HS(8)
//   • borderRadius on rectangles         → borderRadius: HS(12)
//   • borderWidth                        → borderWidth: HS(1)
//   • Icon sizes (width AND height)      → <Icon size={HS(24)} />
//   • Image dimensions (square images)   → width: HS(120), height: HS(120)
//   • Squares & circles (BOTH dims)      → width: HS(48), height: HS(48)
//
// ⚠️ IMPORTANT — for SQUARES, CIRCLES, ICONS:
//   Use HS for BOTH width AND height (NOT mixing with VS) to keep the
//   aspect ratio locked. Otherwise the shape gets distorted on devices
//   where width and height scale by different ratios.
// ============================================================================

scalingMethods.HS = (size: number) =>
  (shortDimension / guideLineBaseWidth) * size;

// ============================================================================
// VS — VERTICAL SCALE  (think: TOP ↕ BOTTOM)
// ============================================================================
// Scales values based on the device's HEIGHT relative to the mockup height.
//
// ✅ USE FOR:
//   • height                             → height: VS(56)
//   • paddingVertical                    → paddingVertical: VS(12)
//   • paddingTop / paddingBottom         → paddingTop: VS(20)
//   • marginVertical                     → marginVertical: VS(16)
//   • marginTop / marginBottom           → marginTop: VS(8)
//   • top / bottom (absolute position)   → top: VS(40)
//   • gap (in flexDirection: 'column')   → gap: VS(12)
//   • lineHeight                         → lineHeight: VS(20)
//   • borderRadius on pill shapes        → borderRadius: VS(24) // half of height
//   • translateY in animations           → translateY: VS(100)
//
// 💡 NON-SQUARE IMAGES (e.g. banner, hero):
//   Use HS for width and VS for height — they have their own aspect ratio
//   that's allowed to flex slightly across devices.
//   Example: width: HS(360), height: VS(180)
// ============================================================================

scalingMethods.VS = (size: number) =>
  (longDimension / guideLineBaseHeight) * size;

// ============================================================================
// FS — FONT SCALE  (only for fontSize)
// ============================================================================
// Scales font sizes with a DAMPENING FACTOR so text doesn't grow or shrink
// as aggressively as the screen. Keeps fonts readable on tiny Android phones
// and large iPhones.
//
// ✅ USE FOR:
//   • fontSize                           → fontSize: FS(14)
//
// ❌ DO NOT USE FOR anything else (use HS or VS for those).
//
// How the factor works:
//   factor = 0   → no scaling, font stays original size everywhere
//   factor = 0.5 → font scales HALF as much as the screen (our default ✅)
//   factor = 1   → font scales linearly (same as HS)
//
// Example with FS(16) on different devices:
//   iPhone SE (375px)       → 15px  (only -1px from design)
//   iPhone 15 Pro (393px)   → 15px
//   iPhone 15 Pro Max       → 16px  (matches design)
//
// 💡 MINIMUM font size: don't go below FS(12) for body text on old phones.
// ============================================================================

scalingMethods.FS = (size: number, factor = 0.5) =>
  Math.round(size + (scalingMethods.HS(size) - size) * factor);

// ============================================================================
// DEBUG — Logs scaling info once at app start
// Wrapped in __DEV__ so it auto-disables in production builds.
// ============================================================================
if (__DEV__) {
  console.log("========== SCALING DEBUG ==========");
  console.log(`Device:  ${width} × ${height}`);
  console.log(`Mockup:  ${guideLineBaseWidth} × ${guideLineBaseHeight}`);
  console.log(`HS ratio: ${(shortDimension / guideLineBaseWidth).toFixed(2)}`);
  console.log(`VS ratio: ${(longDimension / guideLineBaseHeight).toFixed(2)}`);
  console.log("--- HS test ---");
  console.log(`HS(100) = ${scalingMethods.HS(100)}`);
  console.log(`HS(200) = ${scalingMethods.HS(200)}`);
  console.log("--- VS test ---");
  console.log(`VS(100) = ${scalingMethods.VS(100)}`);
  console.log(`VS(200) = ${scalingMethods.VS(200)}`);
  console.log("--- FS test ---");
  console.log(`FS(12) = ${scalingMethods.FS(12)}   // smallest (caption)`);
  console.log(`FS(14) = ${scalingMethods.FS(14)}   // body`);
  console.log(`FS(16) = ${scalingMethods.FS(16)}   // default`);
  console.log(`FS(20) = ${scalingMethods.FS(20)}   // heading`);
  console.log(`FS(28) = ${scalingMethods.FS(28)}   // title`);
  console.log("===================================");
}

export default scalingMethods;
