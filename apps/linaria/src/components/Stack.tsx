import { styled } from "@linaria/react";
import { theme } from "../theme";

type StackProps = {
  space?: keyof typeof theme["space"];
};

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ space = 2 }) => theme.space[space]};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
