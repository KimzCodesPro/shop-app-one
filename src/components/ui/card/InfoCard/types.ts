import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type InfoCardProps = {
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export type InfoCardLeadingProps = {
  title: string;
  description: string;
};

export type InfoCardTrailingProps = {
  children: React.ReactNode;
};
