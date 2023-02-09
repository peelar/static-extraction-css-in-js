import styled, { css } from "styled-components";
import { Button } from "./components/Button";

const HorizontalList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => css`
    gap: ${theme.space[4]};
  `}
`;

function App() {
  return (
    <main>
      <h1>UI-Kit styled-components</h1>
      <h2>Buttons</h2>
      <HorizontalList>
        <li>
          <Button>Primary</Button>
        </li>
        <li>
          <Button variant="secondary">Secondary</Button>
        </li>
        <li>
          <Button disabled>Disabled</Button>
        </li>
      </HorizontalList>
    </main>
  );
}

export default App;
