import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
