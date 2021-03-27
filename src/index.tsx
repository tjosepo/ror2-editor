import React from "react";
import { render } from "react-dom";
import Controller from "./components/controller";
import "./styles.scss";
import Info from "./components/info";

function App() {
  return (
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
  );
}

render(<App />, document.getElementById("root"));
