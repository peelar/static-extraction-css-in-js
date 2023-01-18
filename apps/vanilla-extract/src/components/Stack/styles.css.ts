import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "../../theme.css";

const base = style({
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
    },
  },
});

export const stackVariants = styleVariants(themeVars.space, (space) => [
  base,
  {
    gap: space,
  },
]);
