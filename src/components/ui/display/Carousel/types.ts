import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { PaginationDotType } from "./PaginationDot/types";

export type CarouselBaseProps<T> = {
  data: T[];
  height: number;
  renderItem: (item: T) => ReactElement;
  paginationDotType: PaginationDotType;
  loop?: boolean;
  style?: StyleProp<ViewStyle>;
};

type CarouselPropsAutoPlay =
  | { autoplay?: false; autoplayInterval: never }
  | { autoplay?: true; autoplayInterval?: number };

export type CarouselProps<T> = CarouselBaseProps<T> & CarouselPropsAutoPlay;
