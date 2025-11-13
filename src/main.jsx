import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import logo from "./assets/logo.jpg"; // ✅ Import your logo

// Dynamically set favicon
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/jpeg";
link.href = logo;
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
