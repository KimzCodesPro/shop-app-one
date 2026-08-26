import { fonts } from "@/constants";
import { useWindowDimensions } from "react-native";
import BaseRenderHtml from "react-native-render-html";
import { RenderHtmlProps } from "./types";

const systemFonts = [...Object.values(fonts.en), ...Object.values(fonts.ar)];

const RenderHtml = ({ source, tagsStyles }: RenderHtmlProps) => {
  const { width } = useWindowDimensions();

  return (
    <BaseRenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagsStyles}
      systemFonts={systemFonts}
    />
  );
};

export default RenderHtml;
