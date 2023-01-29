import { styled } from "@linaria/react";
import { theme } from "../theme";

const palette = {
  primary: {
    textColor: theme.colors.common.white,
    idleColor: theme.colors.palette.sky[500],
    activeColor: theme.colors.palette.sky[600],
  },
  secondary: {
    textColor: theme.colors.palette.sky[500],
    idleColor: theme.colors.common.white,
    activeColor: theme.colors.palette.sky[50],
  },
};

export type ButtonVariant = keyof typeof palette;

type ButtonProps = {
  variant?: ButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  padding: ${theme.space[2]} ${theme.space[3]};
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: ${theme.sizes.md};
  color: ${({ variant = "primary" }) => palette[variant].textColor};
  background-color: ${({ variant = "primary" }) => palette[variant].idleColor};
  &:disabled {
    cursor: auto;
    background-color: ${theme.colors.common.gray};
    color: ${theme.colors.common.darkGray};
  }

  &:hover:not(:disabled) {
    background-color: ${({ variant = "primary" }) =>
      palette[variant].activeColor};
  }
`;
