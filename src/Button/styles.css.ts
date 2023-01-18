import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const base = style({
  padding: `${vars.space[2]} ${vars.space[3]}`,
  cursor: "pointer",
  fontSize: `${vars.sizes.md}`,
  borderRadius: "8px",
  border: "none",
});

const palette = {
  primary: {
    textColor: vars.colors.common.white,
    idleColor: vars.colors.palette.sky[500],
    activeColor: vars.colors.palette.sky[600],
  },
  secondary: {
    textColor: vars.colors.palette.sky[500],
    idleColor: vars.colors.common.white,
    activeColor: vars.colors.palette.sky[50],
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
        backgroundColor: vars.colors.common.gray,
        color: vars.colors.common.darkGray,
      },
      selectors: {
        "&:hover:not(:disabled)": { backgroundColor: activeColor },
      },
    },
  ]
);
