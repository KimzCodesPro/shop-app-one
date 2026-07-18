export type Size = "sm" | "md" | "lg";

export type AvatarProps =
  | { size?: Exclude<Size, "lg">; enableUploader?: never }
  | { size?: Exclude<Size, "sm" | "md">; enableUploader?: boolean };
