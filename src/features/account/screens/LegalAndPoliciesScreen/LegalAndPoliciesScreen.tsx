import { RenderHtml } from "@/components/ui/display";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import useStyles from "./useStyles";

const source = {
  html: `
  <h1>Terms</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
</p>
<p class>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
</p>
<h1>Changes to the Service and/or Terms:</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
`,
};

const LegalAndPoliciesScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles();
  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => (
        <TopBar title={t("account_legalAndPolicies")} goBack />
      )}
    >
      <RenderHtml source={source} tagsStyles={styles} />
    </ScreenLayout>
  );
};

export default LegalAndPoliciesScreen;
