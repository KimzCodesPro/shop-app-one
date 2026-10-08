import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import { Ref } from "react";

export type BottomSheetRef = BottomSheetModal | null;

export type AppBottomSheetProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  bottomSheetProps?: Omit<
    BottomSheetModalProps,
    "children" | "enableDynamicSizing"
  >;
  ref: Ref<BottomSheetRef>;
};
