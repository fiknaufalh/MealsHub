import TenantInfo from "./pages/TenantInfo";
import ShoppingCart from "./pages/ShoppingCart";
import AppRoutes from "./AppRoutes";
import Login from "./pages/LoginPage";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export default function App() {
    return (
        <>
            <AppRoutes />
        </>
    );
}
