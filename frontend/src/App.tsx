import TenantInfo from "./pages/TenantInfo"
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export default function App() {
    return (
        <div>
            <ShoppingCartProvider>
                <TenantInfo />
                {/* <ShoppingCart /> */}
            </ShoppingCartProvider>
        </div>
    );
}