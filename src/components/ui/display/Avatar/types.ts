export type Size = "sm" | "md" | "lg";

type AvatarBaseProps = { source: string };
type AvatarTypeProps =
  | { size?: Exclude<Size, "lg">; enableUploader?: never }
  | { size?: Exclude<Size, "sm" | "md">; enableUploader?: boolean };

export type AvatarProps = AvatarTypeProps & AvatarBaseProps;
