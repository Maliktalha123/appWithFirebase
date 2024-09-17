import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <NextUIProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </NextUIProvider>
    </CartContextProvider>
  </StrictMode>
);
