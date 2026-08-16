export type ModalProps = {
  title: string;
  description?: string;
  visible: boolean;
  closeModal?: () => void;
  children: React.ReactNode;
};
