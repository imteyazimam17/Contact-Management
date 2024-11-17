import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importing the main App component
import "./styles/ContactManager.css"; // Importing global styles for your app

const root = ReactDOM.createRoot(document.getElementById("root")); // Getting the root DOM element

root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);
