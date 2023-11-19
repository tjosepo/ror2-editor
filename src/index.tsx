import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Controller from "./components/controller";
import "./index.css";
import Info from "./components/info";

function App() {
  return (
    <StrictMode>
      <div className="h-full grid grid-rows[1fr min-content]">
        {/* <Controller /> */}
        <Info />
      </div>
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
