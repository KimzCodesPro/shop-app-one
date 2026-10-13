export type PaginationDotType = "pill" | "circle";

export type PaginationDotProps = {
  type: PaginationDotType;
  active: boolean;
  onPress: () => void;
};
