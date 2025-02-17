import {useMemo} from "react";
import {colors, components, globalStyles} from "./styles";
import {Heebo} from "../fonts/fonts";

export function useCustomTheme() {
  const theme = useMemo(() => ({
    colorScheme: "dark",
    colors: colors(),
    components: components(),
    fontFamily: Heebo.style.fontFamily,
    globalStyles,
    primaryColor: "accent-shade",
    primaryShade: 6,
  }), []);

  return theme;
}
