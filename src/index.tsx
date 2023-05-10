import React from "react";
import { createRoot } from "react-dom/client";
import Controller from "./components/controller";
import "./styles.scss";
import Info from "./components/info";

function App() {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

console.log("reeporting")