import { createTheme, style, styleVariants } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
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
    },
  },
});

export const rectangle = style({
  width: "200px",
  height: "40px",
  borderRadius: "4px",
  display: "flex",
});

export const horizontalList = style({
  padding: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
});
