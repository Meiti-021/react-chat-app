import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import ThemeProviderWrapper from "./ThemeProviderWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Provider>
  </React.StrictMode>
);
