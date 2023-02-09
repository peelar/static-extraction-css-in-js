import styles from "./App.module.css";
import { Button } from "./components/Button";

function App() {
  return (
    <main>
      <h1>UI-Kit CSS modules</h1>
      <h2>Buttons</h2>
      <ul className={styles.horizontalList}>
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
    </main>
  );
}

export default App;
