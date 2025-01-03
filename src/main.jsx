// src/main.jsx

import { createRoot } from "react-dom/client";
import "./index.css";
import Approuter from "./Route";
// import { AuthContextProvider } from "../context/context.jsx";

import  AuthContextProvider  from "./context/context"
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  </AuthContextProvider>
);
