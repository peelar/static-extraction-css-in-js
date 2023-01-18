import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";
import { card } from "./utility.css";

export const rectangle = style([
  card,
  {
    width: "200px",
    height: "40px",
    display: "flex",
  },
]);

export const horizontalList = style({
  padding: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  gap: `${themeVars.space[4]}`,
  flexWrap: "wrap",
});
