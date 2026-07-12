import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Ref } from "react";
import { View } from "react-native";
import { Typography } from "../../display";
import useStyles from "./useStyles";

type AppBottomSheetProps = {
  title: string;
  description?: string;
  ref: Ref<BottomSheet>;
  bottomSheetProps?: BottomSheetProps;
};

export type BottomSheetRef = BottomSheet;

const AppBottomSheet = ({
  title,
  description,
  bottomSheetProps,
  ref,
}: AppBottomSheetProps) => {
  const { styles } = useStyles();

  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      opacity={1}
      {...props}
      style={styles.backDrop}
    />
  );

  return (
    <>
      <BottomSheet
        ref={ref}
        snapPoints={bottomSheetProps?.snapPoints ?? ["20%", "50%", "90%"]}
        index={bottomSheetProps?.index ?? -1}
        enableDynamicSizing={false}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheet}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        {...bottomSheetProps}
      >
        <BottomSheetView style={styles.bottomSheetContainer}>
          <View>
            <Typography variant="mediumBold" style={styles.title}>
              {title}
            </Typography>
            {description && (
              <Typography variant="smallRegular" style={styles.description}>
                {description}
              </Typography>
            )}
          </View>
          <View style={styles.bottomSheetContent}>
            {bottomSheetProps?.children}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default AppBottomSheet;
