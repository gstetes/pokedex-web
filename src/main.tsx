import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BerriesProvider } from "./hooks/useBerries";
import { PokemonsProvider } from "./hooks/usePokemons";
import { ScreensProvider } from "./hooks/useScreen";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScreensProvider>
      <PokemonsProvider>
        <BerriesProvider>
          <App />
        </BerriesProvider>
      </PokemonsProvider>
    </ScreensProvider>
  </React.StrictMode>
);
