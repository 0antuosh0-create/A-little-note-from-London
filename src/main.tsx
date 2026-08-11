import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Fonts — bundled locally, no external requests
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/oswald/700.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/700.css";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
