import { opacity } from "@/constants";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { ComponentProps, useEffect, useMemo, useRef } from "react";
import { BackHandler, View } from "react-native";
import { Typography } from "../../typography";
import { AppBottomSheetProps } from "./types";
import useStyles from "./useStyles";

const AppBottomSheet = (props: AppBottomSheetProps) => {
  const { title, description, bottomSheetProps, ref, children } = props;

  const { styles } = useStyles();

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const isOpen = useRef(false);

  useEffect(() => {
    if (typeof ref === "function" || ref === null) return;

    const nativeNavigationListener = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (!isOpen.current) return false;

        ref.current?.dismiss();
        return true;
      },
    );
    return () => nativeNavigationListener.remove();
  }, [ref]);

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
    <BottomSheetModal
      ref={ref}
      snapPoints={bottomSheetProps?.snapPoints ?? snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose
      backdropComponent={RenderBackdrop}
      backgroundStyle={styles.bottomSheet}
      handleStyle={styles.handleStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      {...bottomSheetProps}
      onChange={(index) => {
        isOpen.current = index >= 0;
      }}
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
    </BottomSheetModal>
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
