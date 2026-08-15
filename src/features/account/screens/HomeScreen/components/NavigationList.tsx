import { Typography } from "@/src/components/ui/display";
import { RowNav } from "@/src/components/ui/navigations";
import spacing from "@/src/constants/spacing";
import useTheme from "@/src/hooks/useTheme";
import { StyleSheet, View } from "react-native";
import { PageNavigationList } from "../types";

const NavigationList = ({
  navigationList,
}: {
  navigationList: PageNavigationList;
}) => {
  const colors = useTheme();
  return (
    <>
      {navigationList.map((section) => (
        <View key={section.title}>
          <Typography
            textTransform="capitalize"
            variant="mediumBold"
            style={styles.header}
            color={colors.foreground.primary}
          >
            {section.title}
          </Typography>
          <View style={styles.rows}>
            {section.rows.map((row) => (
              <RowNav key={row.title} {...row} />
            ))}
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: spacing.space24.height,
    marginBottom: spacing.space16.height,
  },

  rows: {
    gap: spacing.space16.height,
  },
});

export default NavigationList;
