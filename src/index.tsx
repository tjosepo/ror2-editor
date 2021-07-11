import { render } from "react-dom";
import Controller from "./components/controller";
import "./styles.scss";
import Info from "./components/info";
import { SaveProvider } from "./contexts/save-context";

function App() {
  return (
    <SaveProvider>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "1fr min-content",
        }}
      >
        <Controller />
        <Info />
      </div>
    </SaveProvider>
  );
}

render(<App />, document.getElementById("root"));
