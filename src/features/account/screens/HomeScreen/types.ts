import { RowNavProps } from "@/src/components/ui/navigations/RowNav/types";

export type PageNavigationSection = {
  title: string;
  rows: RowNavProps[];
};

export type PageNavigationList = PageNavigationSection[];
