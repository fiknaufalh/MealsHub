import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TenantInfo from "./pages/TenantInfo";
import ShoppingCart from "./pages/ShoppingCart";
import Homepage from "./pages/Homepage";
import OrderList from "./pages/OrderList";
import OrderSummary from "./pages/OrderSummary";
import PageManageOrder from "./pages/PageManageOrder";
import PageManageMenu from "./pages/PageManageMenu";
import SignUpTenant from "./pages/SignUpTenant";
import SignUpCashier from "./pages/SignUpCashier";
import RegisterTable from "./pages/RegisterTable";
import ChooseRolePage from "./pages/RolePage";
import OrderDetails from "./pages/ManageOrderTenant";
import Summary from "./pages/ManagePayment";
import Payment from "./pages/Payment";
import ViewPaymentHistory from "./pages/ViewPaymentHistory";
import ManagePayment from "./pages/ManagePayment";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/role" element={<ChooseRolePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/customer" element={<RegisterTable />} />
            <Route path="/signup/tenant" element={<SignUpTenant />} />
            <Route path="/signup/cashier" element={<SignUpCashier />} />
            <Route path="/tenant/:tenantid" element={<TenantInfo />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/order/list/:tableid" element={<OrderList />} />
            <Route path="/order/summary/:orderid" element={<OrderSummary />} />
            <Route path="/tenantpage/orders" element={<PageManageOrder />} />
            <Route path="/tenantpage/menus" element={<PageManageMenu />} />
            <Route
                path="/tenantpage/orders/:orderid"
                element={<OrderDetails />}
            />
            <Route
                path="/cashier/payments/:orderid"
                element={<ManagePayment />}
            />
            <Route path="/payment/:paymentid" element={<Payment />} />
            <Route path="/cashier/payments" element={<ViewPaymentHistory />} />
        </Routes>
    );
}
