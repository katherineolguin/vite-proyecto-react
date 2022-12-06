// El DOM virtual es un concepto de peogamaciondodne una representacion  ideal o "virtual" de la IU (interfaz de usuario) se mantiene en la memoria t en sincronia con el DOM "real", mediante una BIBLIOTECA como ReactDom, esto se llama => recociliacion

// ReactDOM proporcona metodos especificos que puedenn ser utilizadosen los niveles mas alto de la apliacion como una via de edape del modelo de REACT si asi se necesita

// Ract.StrictMode esuna herramienta para destacar los problemas potenciales en la App, este no renderiza nada en la IU(inteffaz de usuario), de este modo tambien activa advertencias y comprobaciones adicionales para sus desecendientes

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
