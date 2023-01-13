import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../global.css";

const base = style({
  padding: "0.5rem 0.75rem",
  cursor: "pointer",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "none",
  transition: "all 0.2s",
  ":hover": {
    transform: "scale(1.02)",
  },
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
      ":hover": { backgroundColor: activeColor },
    },
  ]
);
