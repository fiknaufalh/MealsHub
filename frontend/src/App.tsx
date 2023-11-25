import TenantInfo from "./pages/TenantInfo";
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import PageManageOrder from "./pages/PageManageOrder";
import PageManageMenu from "./pages/PageManageMenu";
import OrderSummary from "./pages/OrderSummary";
import OrderDetails from "./pages/OrderDetailsTenant";
import Homepage from "./pages/Homepage";
import Testing from "./pages/Testing";
import CartCard from "./components/CartCard";

export default function App() {
    return (
        <div>
            <ShoppingCartProvider>
                <TenantInfo tenantid={1}/>
                <ShoppingCart />
            </ShoppingCartProvider>
            {/* <PageManageMenu /> */}
            {/* <PageManageOrder /> */}
            {/* <OrderSummary /> */}
            {/* <OrderDetails /> */}
            {/* <Homepage /> */}
            {/* <Testing /> */}
        </div>
    );
}
