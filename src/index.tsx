import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { I18nContextProvider } from "./context/I18nContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <I18nContextProvider>
        <App />
      </I18nContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
