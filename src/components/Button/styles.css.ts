import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "../../theme.css";

const base = style({
  padding: `${themeVars.space[2]} ${themeVars.space[3]}`,
  cursor: "pointer",
  fontSize: `${themeVars.sizes.md}`,
  borderRadius: "8px",
  border: "none",
});

const palette = {
  primary: {
    textColor: themeVars.colors.common.white,
    idleColor: themeVars.colors.palette.sky[500],
    activeColor: themeVars.colors.palette.sky[600],
  },
  secondary: {
    textColor: themeVars.colors.palette.sky[500],
    idleColor: themeVars.colors.common.white,
    activeColor: themeVars.colors.palette.sky[50],
  },
};

export type ButtonVariant = keyof typeof palette;

export const buttonVariants = styleVariants(
  palette,
  ({ idleColor, activeColor, textColor }) => [
    base,
    {
      backgroundColor: idleColor,
      color: textColor,
      ":disabled": {
        cursor: "auto",
        backgroundColor: themeVars.colors.common.gray,
        color: themeVars.colors.common.darkGray,
      },
      selectors: {
        "&:hover:not(:disabled)": { backgroundColor: activeColor },
      },
    },
  ]
);
