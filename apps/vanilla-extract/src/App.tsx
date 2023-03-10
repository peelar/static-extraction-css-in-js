import { Button, Stack } from "./components";
import { themeVars, themeClass } from "./theme.css";
import { horizontalList, rectangle } from "./App.css";
import { capitalize, gradients } from "./utility.css";

function App() {
  return (
    <main className={themeClass}>
      <h1>UI-Kit vanilla-extract</h1>
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
      <h2>Stack</h2>
      <Stack>
        <div className={rectangle}>Item 1</div>
        <div className={rectangle}>Item 2</div>
        <div className={rectangle}>Item 3</div>
      </Stack>
      <h2>Gradient</h2>
      <div className={`${rectangle} ${gradients.skyViolet}`} />
    </main>
  );
}

export default App;
