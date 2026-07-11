import Icon from "@/components/icons";
import { JSX } from "react";
import { Pressable, Modal as RNModal, View } from "react-native";
import { Typography } from "../../display";
import useStyles from "./useStyles";

type ModalProps = {
  title: string;
  description?: string;
  visible: boolean;
  closeModal: () => void;
  renderItem: () => JSX.Element;
};

const Modal = ({
  title,
  description,
  visible,
  closeModal,
  renderItem,
}: ModalProps) => {
  const { styles, colors } = useStyles();
  return (
    <RNModal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.backDrop}>
        <View style={styles.content}>
          <Pressable style={styles.contentCloseBTN} onPress={closeModal}>
            <Icon name="close" size={20} color={colors.fg.primary} />
          </Pressable>
          <View style={styles.contentHeader}>
            <Typography
              variant="mediumBold"
              color={colors.fg.primary}
              style={styles.contentTitle}
            >
              {title}
            </Typography>

            {description && (
              <Typography
                variant="smallRegular"
                color={colors.fg.secondary}
                style={styles.contentDescription}
              >
                {description}
              </Typography>
            )}
          </View>
          <View style={styles.contentChildren}>{renderItem()}</View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
