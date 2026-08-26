import { Accordion } from "@/src/components/ui/display";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { useTranslation } from "@/src/hooks";

const HelpAndSupportScreen = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      id: 1,
      title: t("account_faqTrackOrder"),
      content: t("account_faqTrackOrderAnswer"),
    },
    {
      id: 2,
      title: t("account_faqReturns"),
      content: t("account_faqReturnsAnswer"),
    },
    {
      id: 3,
      title: t("account_faqPayments"),
      content: t("account_faqPaymentsAnswer"),
    },
    {
      id: 4,
      title: t("account_faqShipping"),
      content: t("account_faqShippingAnswer"),
    },
    {
      id: 5,
      title: t("account_faqContact"),
      content: t("account_faqContactAnswer"),
    },
  ];
  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("account_helpAndSupport")} goBack />}
    >
      <Accordion items={faqs} />
    </ScreenLayout>
  );
};

export default HelpAndSupportScreen;
