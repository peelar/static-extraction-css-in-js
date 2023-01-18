import { style } from "@vanilla-extract/css";
import { PaletteColor, PaletteColorShade, Shade, themeVars } from "./theme.css";

export const capitalize = style({
  textTransform: "capitalize",
});

export const card = style({
  borderRadius: "4px",
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
});

type SplitColorShade = [PaletteColor, Shade];

const makeGradient = (
  colorShade1: PaletteColorShade,
  colorShade2: PaletteColorShade
) => {
  const [color1, shade1] = colorShade1.split(".") as SplitColorShade;
  const [color2, shade2] = colorShade2.split(".") as SplitColorShade;

  return style({
    background: `linear-gradient(90deg, ${themeVars.colors.palette[color1][shade1]} 0%, ${themeVars.colors.palette[color2][shade2]} 100%)`,
  });
};

export const gradients = {
  skyViolet: makeGradient("sky.500", "violet.500"),
};
