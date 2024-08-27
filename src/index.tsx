import React from "react";

import { createRoot } from "react-dom/client";
import Controller from "./components/controller";
import Info from "./components/info";

import "./styles.scss";

function App(): React.JSX.Element {
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

createRoot(document.getElementById("root")!).render(<App />);
