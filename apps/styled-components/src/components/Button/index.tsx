import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: "primary" | "secondary";
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 8px;
  border: none;

  ${({ theme, variant }) => css`
    font-size: ${theme.sizes.md};
    padding: ${theme.space[2]} ${theme.space[3]};

    &:disabled {
      cursor: auto;
      background-color: ${theme.colors.common.gray};
      color: ${theme.colors.common.darkGray};
    }

    ${variant === "primary" &&
    css`
      background-color: ${theme.colors.palette.sky[500]};
      color: ${theme.colors.common.white};

      &:hover:not(:disabled) {
        background-color: ${theme.colors.palette.sky[600]};
      }
    `}

    ${variant === "secondary" &&
    css`
      background-color: ${theme.colors.common.white};
      color: ${theme.colors.palette.sky[500]};

      &:hover:not(:disabled) {
        background-color: ${theme.colors.palette.sky[50]};
      }
    `}
  `}
`;

Button.defaultProps = {
  variant: "primary",
};
