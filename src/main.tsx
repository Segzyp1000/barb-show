import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// @ts-ignore: Imported module has no declaration file
import "./index.css";
// @ts-ignore: Imported module has no declaration file
import ErrorBoundary from "./component/ErrorBoundary";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
