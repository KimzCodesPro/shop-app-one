import { avatarPlaceholder } from "@/assets/images";
import Icon from "@/components/icons";
import { Image } from "expo-image";
import { View } from "react-native";
import { AvatarProps } from "./types";
import useStyles from "./useStyles";

const Avatar = ({ size = "md", enableUploader, source }: AvatarProps) => {
  const { styles, colors } = useStyles(size);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={source}
        contentFit="cover"
        placeholder={avatarPlaceholder}
        placeholderContentFit="cover"
        transition={1000}
      />
      {enableUploader && size === "lg" && (
        <View style={styles.uploaderRing}>
          <View style={styles.uploader}>
            <Icon name="camera" size={20} color={colors.foreground.contrast} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Avatar;
