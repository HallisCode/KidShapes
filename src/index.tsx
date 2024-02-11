import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App.tsx";

const root : Root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

