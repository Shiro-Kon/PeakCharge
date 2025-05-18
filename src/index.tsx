import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Container/App/App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Component/CartPage/CartContext";
import { reportWebVitals } from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BrowserRouter>
);

const handleWebVitals = (metric: any) => {
  const { name, value, delta, id } = metric;

  if (process.env.NODE_ENV === "development") {
    console.log(`Web Vitals: ${name} - Значення: ${value}, Дельта: ${delta}`);
  }

  const body = JSON.stringify({
    name,
    value,
    delta,
    id,
    timestamp: Date.now(),
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/metrics", body);
  } else {
    fetch("/api/metrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch((error) => {
      console.error("Помилка при надсиланні метрики:", error);
    });
  }
};

reportWebVitals(handleWebVitals);
