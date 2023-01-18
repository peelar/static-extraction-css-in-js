import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

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
  gap: `${vars.space[4]}`,
  flexWrap: "wrap",
});

export const capitalize = style({
  textTransform: "capitalize",
});
