import { StyleProp, TextStyle } from "react-native";

export type Sizes = "sm" | "md" | "lg";

type AvatarBaseProps = { imgSrc: string; style?: StyleProp<TextStyle> };
type AvatarTypeProps =
  | { size?: Exclude<Sizes, "lg">; enableUploader?: never }
  | { size?: Exclude<Sizes, "sm" | "md">; enableUploader?: boolean };

export type AvatarProps = AvatarTypeProps & AvatarBaseProps;
