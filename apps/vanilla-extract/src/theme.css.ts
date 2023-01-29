import { createTheme, globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  fontFamily: "sans-serif",
});

export const [themeClass, themeVars] = createTheme({
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
  },
  sizes: {
    none: "0",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "5rem",
    "5xl": "6rem",
    "6xl": "8rem",
  },
  colors: {
    palette: {
      sky: {
        900: "#0c4a6e",
        800: "#075985",
        700: "#0369a1",
        600: "#0284c7",
        500: "#0ea5e9",
        400: "#38bdf8",
        300: "#7dd3fc",
        200: "#bae6fd",
        100: "#e0f2fe",
        50: "#f0f9ff",
      },
      violet: {
        900: "#4c1d95",
        800: "#5b21b6",
        700: "#6d28d9",
        600: "#7c3aed",
        500: "#8b5cf6",
        400: "#a78bfa",
        300: "#c4b5fd",
        200: "#ddd6fe",
        100: "#ede9fe",
        50: "#f5f3ff",
      },
    },
    common: {
      white: "#ffffff",
      gray: "#f3f4f6",
      darkGray: "#a0aec0",
      black: "#111827",
    },
  },
});

export type PaletteColor = keyof typeof themeVars.colors.palette;

export type Shade = keyof typeof themeVars.colors.palette.sky;

export type PaletteColorShade = `${PaletteColor}.${Shade}`;
