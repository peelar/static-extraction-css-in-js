import { Button } from "./components";
import { themeVars, themeClass } from "./theme.css";
import { capitalize, horizontalList, rectangle } from "./utility.css";

function App() {
  return (
    <main className={themeClass}>
      <h1>Vanilla Extract UI-Kit</h1>
      <h2>Buttons</h2>
      <ul className={horizontalList}>
        <li>
          <Button>Primary</Button>
        </li>
        <li>
          <Button variant="secondary">Secondary</Button>
        </li>
        <li>
          <Button disabled>Disabled</Button>
        </li>
      </ul>
      <h2>Colors</h2>
      {Object.entries(themeVars.colors.palette).map(([name, shades]) => (
        <>
          <h3 className={capitalize}>{name}</h3>
          <ul className={horizontalList}>
            {Object.entries(shades).map(([shade, color]) => (
              <li key={shade}>
                {/* // ! is backgroundColor the best option here? */}
                <div className={rectangle} style={{ backgroundColor: color }} />
                <span>{shade}</span>
              </li>
            ))}
          </ul>
        </>
      ))}
    </main>
  );
}

export default App;
