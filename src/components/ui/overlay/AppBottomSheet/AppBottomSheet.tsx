import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { opacity } from "@/constants";
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
        <View style={styles.container}>
          <Typography variant="mediumBold" style={styles.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="smallRegular" style={styles.description}>
              {description}
            </Typography>
          )}
          {children}
        </View>
      </BottomSheet>
    </Portal>
  );
};

const Content = ({ style, children, ...rest }: ComponentProps<typeof View>) => {
  const { styles } = useStyles();
  return (
    <View style={[styles.content, style]} {...rest}>
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
    <BottomSheetScrollView style={[styles.content, style]} {...rest}>
      {children}
    </BottomSheetScrollView>
  );
};

const List = ({
  style,
  ...rest
}: ComponentProps<typeof BottomSheetFlatList>) => {
  const { styles } = useStyles();
  return <BottomSheetFlatList style={[styles.content, style]} {...rest} />;
};

AppBottomSheet.Content = Content;
AppBottomSheet.Scroll = Scroll;
AppBottomSheet.List = List;

export default AppBottomSheet;
