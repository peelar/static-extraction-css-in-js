import { ButtonVariant, buttonVariants } from "./styles.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: ButtonVariant;
};

export const Button = ({ variant = "primary", ...p }: ButtonProps) => {
  return <button className={buttonVariants[variant]} {...p} />;
};
