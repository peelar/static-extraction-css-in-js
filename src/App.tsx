import { Button } from "./Button";
import { horizontalList, rectangle, themeClass, vars } from "./global.css";

function App() {
  return (
    <main className={themeClass}>
      <h2>Buttons</h2>
      <ul className={horizontalList}>
        <li>
          <Button>Primary</Button>
        </li>
        <li>
          <Button variant="secondary">Secondary</Button>
        </li>
      </ul>
      <h2>Colors</h2>
      {Object.entries(vars.colors.palette).map(([name, shades]) => (
        <>
          <h3>{name}</h3>
          <ul className={horizontalList}>
            {Object.entries(shades).map(([shade, color]) => (
              <li key={shade}>
                <div className={rectangle} style={{ backgroundColor: color }} />
                <div>{shade}</div>
              </li>
            ))}
          </ul>
        </>
      ))}
    </main>
  );
}

export default App;
