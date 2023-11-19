<<<<<<< HEAD
import TenantInfo from "./pages/TenantInfo"
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
=======
import Sidebar from "./components/Sidebar";
import TenantCard from "./components/TenantCard";
import Search from "./components/Search";
//import ProductCard from "./components/ProductCard";
import Payment from "./pages/Payment/payment";

>>>>>>> feat(UC05) : add make payment

export default function App() {
    return (
        <div>
<<<<<<< HEAD
            <ShoppingCartProvider>
                <TenantInfo />
                {/* <ShoppingCart /> */}
            </ShoppingCartProvider>
=======
            <Payment />
>>>>>>> feat(UC05) : add make payment
        </div>
    );
}