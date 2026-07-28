import { JSX } from "react";

export type ModalProps = {
  title: string;
  description?: string;
  visible: boolean;
  closeModal: () => void;
  renderItem: () => JSX.Element;
};
