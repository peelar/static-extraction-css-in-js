import React from "react";
import styles from "./styles.module.css";

type CustomButtonProps = {
  variant?: "primary" | "secondary";
};

export const Button = ({
  variant = "primary",
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CustomButtonProps) => {
  return (
    <button
      className={[
        styles.btn,
        variant === "primary" && styles.btnPrimary,
        variant === "secondary" && styles.btnSecondary,
      ].join(" ")}
      {...rest}
    />
  );
};
