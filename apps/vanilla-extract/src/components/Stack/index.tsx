import { themeVars } from "../../theme.css";
import { stackVariants } from "./styles.css";

type StackProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  space?: keyof typeof themeVars["space"];
};

export const Stack = ({ space = 2, ...p }: StackProps) => {
  return <div className={stackVariants[space]} {...p} />;
};
