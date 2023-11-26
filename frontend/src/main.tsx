import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import AppRoutes from "./AppRoutes.tsx";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.tsx";
// import { AuthProvider } from "./hooks/useAuth.tsx";
// import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
