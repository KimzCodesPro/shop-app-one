import { opacity } from "@/constants";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { ComponentProps } from "react";
import { View } from "react-native";
import { Typography } from "../../display";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = ({
  title,
  description,
  bottomSheetProps,
  ref,
  children,
}: AppBottomSheetProps) => {
  const { styles } = useStyles();

  const RenderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      opacity={opacity.full}
      {...props}
      style={styles.backDrop}
    />
  );

  return (
    <Portal>
      <BottomSheet
        ref={ref}
        snapPoints={
          bottomSheetProps?.snapPoints ?? ["20%", "50%", "70%", "90%"]
        }
        index={bottomSheetProps?.index ?? -1}
        enableDynamicSizing={false}
        enablePanDownToClose
        backdropComponent={RenderBackdrop}
        backgroundStyle={styles.bottomSheet}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        {...bottomSheetProps}
      >
        <View style={styles.header}>
          <Typography variant="mediumBold" style={styles.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="smallRegular" style={styles.description}>
              {description}
            </Typography>
          )}
        </View>
        {children}
      </BottomSheet>
    </Portal>
  );
};

const Content = ({ style, children, ...rest }: ComponentProps<typeof View>) => {
  const { styles } = useStyles();
  return (
    <View style={[styles.content, styles.contentContainer, style]} {...rest}>
      {children}
    </View>
  );
};

const Scroll = ({
  style,
  children,
  ...rest
}: ComponentProps<typeof BottomSheetScrollView>) => {
  const { styles } = useStyles();
  return (
    <BottomSheetScrollView
      style={[styles.content, style]}
      contentContainerStyle={styles.contentContainer}
      {...rest}
    >
      {children}
    </BottomSheetScrollView>
  );
};

const FlatList = ({
  style,
  ...rest
}: ComponentProps<typeof BottomSheetFlatList>) => {
  const { styles } = useStyles();
  return (
    <BottomSheetFlatList
      style={[styles.content, style]}
      contentContainerStyle={styles.contentContainer}
      {...rest}
    />
  );
};

AppBottomSheet.Content = Content;
AppBottomSheet.Scroll = Scroll;
AppBottomSheet.FlatList = FlatList;

export default AppBottomSheet;
