import { onBoard1, onBoard2, onBoard3 } from "@/assets/images";

export const LANDING_SLIDES = [
  {
    img: onBoard1,
    title: "onBoarding_titleOne",
    description: "onBoarding_descriptionOne",
  },
  {
    img: onBoard2,
    title: "onBoarding_titleTwo",
    description: "onBoarding_descriptionTwo",
  },
  {
    img: onBoard3,
    title: "onBoarding_titleThree",
    description: "onBoarding_descriptionThree",
  },
] as const;
