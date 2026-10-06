import { RowNavProps } from "@/src/components/ui/list/RowNav/types";

export type PageNavigationSection = {
  title: string;
  rows: RowNavProps[];
};

export type PageNavigationList = PageNavigationSection[];
