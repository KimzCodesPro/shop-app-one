import { Carousel } from "@/components/ui/display";
import { Button, LanguageSwitcher } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { CarouselItem } from "./components";
import { LANDING_SLIDES } from "./data";
import styles from "./welcomeScreenStyles";

const WelcomeScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const slides = LANDING_SLIDES.map((slide) => ({
    image: slide.img,
    title: t(slide.title),
    description: t(slide.description),
  }));

  return (
    <ScreenLayout contentContainerStyle={styles.container}>
      <LanguageSwitcher style={styles.languageSwitcher} />
      <Carousel
        paginationDotType="pill"
        data={slides}
        loop={true}
        autoplay={true}
        autoplayInterval={4000}
        height={510}
        renderItem={({ image, title, description }) => (
          <CarouselItem image={image} title={title} description={description} />
        )}
      />
      <View style={styles.actionsButton}>
        <Button
          title={t("onBoarding_createAccountButton")}
          onPress={() => router.replace("/createAccount")}
        />
        <Button
          title={t("onBoarding_alreadyHaveAccount")}
          variant="link"
          style={styles.linkButton}
          onPress={() => router.replace("/login")}
        />
      </View>
    </ScreenLayout>
  );
};

export default WelcomeScreen;
