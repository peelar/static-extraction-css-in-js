import { css, cx } from "@linaria/core";
import { styled } from "@linaria/react";
import { Button, Stack } from "./components";
import { theme } from "./theme";
import { capitalize, card } from "./utility.styles";

const rectangle = css`
  width: 200px;
  height: 40px;
  display: flex;
`;

// * I didn't manage to create a dynamic `makeGradient` helper
const skyVioletGradient = css`
  background: linear-gradient(
    90deg,
    ${theme.colors.palette.sky[500]} 0%,
    ${theme.colors.palette.violet[500]} 100%
  );
`;

// * I would prefer to use `styled(Card)` but it threw a babel error
const Rectangle = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  // * composing styles using `cx` helper
  return <div className={cx(rectangle, card, props.className)} {...props} />;
};

// * colocation: you can create extracted components in the same file
const HorizontaList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: ${theme.space[4]};
  flex-wrap: wrap;
`;

// * global styles
const global = css`
  font-family: sans-serif;
`;

function App() {
  return (
    <main className={global}>
      <h1>UI-Kit linaria</h1>
      <h2>Buttons</h2>
      <HorizontaList>
        <li>
          <Button>Primary</Button>
        </li>
        <li>
          <Button variant="secondary">Secondary</Button>
        </li>
        <li>
          <Button disabled>Disabled</Button>
        </li>
      </HorizontaList>
      <h2>Colors</h2>
      {Object.entries(theme.colors.palette).map(([name, shades]) => (
        <>
          <h3 className={capitalize}>{name}</h3>
          <HorizontaList>
            {Object.entries(shades).map(([shade, color]) => (
              <li key={shade}>
                {/* // * passing color dynamically  */}
                <Rectangle style={{ backgroundColor: color }} />
                <span>{shade}</span>
              </li>
            ))}
          </HorizontaList>
        </>
      ))}
      <h2>Stack</h2>
      <Stack>
        <Rectangle>Item 1</Rectangle>
        <Rectangle>Item 2</Rectangle>
        <Rectangle>Item 3</Rectangle>
      </Stack>
      <h2>Gradient</h2>
      <div className={cx(skyVioletGradient, rectangle, card)} />
    </main>
  );
}

export default App;
