import Sidebar from "../components/Sidebar";
import OrderDetailsCard from "../components/OrderDetailsCard";
import OrderSummaryCard from "../components/OrderSummaryCard";
import BackButton from "../components/BackButton";
import Welcome from "../components/Welcome";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import ProfileDropDown from "../components/ProfileDropDown";
import Axios from "axios";
import { useParams } from "react-router-dom";
import crypto from "crypto-js";

interface Order {
    id: number,
    status: string,
    time: Date,
    id_table: number,
    id_tenant: number
}

interface OrderProduct {
    num_product: number,
    id_product: number,
    id_order: number
}

interface Product {
    id: number,
    name: string,
    price: number
}

interface Tenant {
    id: number,
    name: string
}

interface Payment {
    id: number,
    status: string,
    id_order: number
}

interface OrderSummary {
    id: number,
    name: string,
    orderlist: (string | number)[][]
}

interface OrderDetails {
    orderid: number,
    code: string | null,
    tableid: number,
    time: Date,
    orderstatus: string,
    paymentstatus: string
}

export default function OrderDetails() {
    const { orderid } = useParams();
    const [showProfileDropDown, setShowProfileDropDown] = useState(false);

    const handleProfileClick = () => {
        setShowProfileDropDown(!showProfileDropDown);
    };
    const [joinedOrderSummaryData, setJoinedOrderSummaryData] = useState<OrderSummary[]>([]);

    const getOrderSummaryData = async () => {
        const orderResponse = await Axios.get(`http://localhost:8000/orders/${orderid}`);
        const productResponse = await Axios.get("http://localhost:8000/products");
        const orderProductResponse = await Axios.get("http://localhost:8000/orderproduct");
        const tenantResponse = await Axios.get("http://localhost:8000/tenants");

        const orderData = orderResponse.data.data;
        const productData = productResponse.data.data;
        const orderProductData = orderProductResponse.data.data;
        const tenantData = tenantResponse.data.data;

        // Perform the join based on the specified conditions
        // OrderData is not an array, so we need to convert it into an array
        const orderDataArray = [orderData];
        const result = orderDataArray.map((order: Order) => {
            const tenant = tenantData.find((tenant: Tenant) => tenant.id === order.id_tenant);
            const orderproduct = orderProductData.filter((orderProduct: OrderProduct) => orderProduct.id_order === order.id);
            const listproduct = orderproduct.map((orderProduct: OrderProduct) => {
                const product = productData.find((product: Product) => product.id === orderProduct.id_product);
                return [product?.name || 'Product Not Found', orderProduct.num_product, product?.price || 0];
            });

            return {
                id: tenant?.id || 0,
                name: tenant?.name || 'Tenant Not Found',
                orderlist: listproduct
            };
        });

        setJoinedOrderSummaryData(result);

    };

    useEffect(() => {
        getOrderSummaryData();
    }, []);

    console.log(joinedOrderSummaryData);

    const [joinedOrderDetailsData, setJoinedOrderDetailsData] = useState<OrderDetails[]>([]);

    const getOrderDetailsData = async () => {
        const orderResponse = await Axios.get(`http://localhost:8000/orders/${orderid}`);
        const paymentResponse = await Axios.get("http://localhost:8000/payments");

        const orderData = orderResponse.data.data;
        const paymentData = paymentResponse.data.data;

        // Perform the join based on the specified conditions
        const OrderDataArray = [orderData];
        const result = OrderDataArray.map((order: Order) => {
            const matchingPayment = paymentData.find((payment: Payment) => payment.id_order === order.id);

            // Hash the code (matchingPayment.id) using SHA-256 from crypto-js and take the first 5 characters
            const hashedCode = matchingPayment ? crypto.SHA256(matchingPayment.id.toString()).toString().substring(0, 5) : null;

            return {
                orderid: order.id,
                code: hashedCode,
                tableid: order.id_table,
                time: order.time,
                orderstatus: order.status,
                paymentstatus: matchingPayment ? matchingPayment.status : null
            };
        });

        setJoinedOrderDetailsData(result);
    };

    useEffect(() => {
        getOrderDetailsData();
    }, []);

    console.log(joinedOrderDetailsData);

    //Const for state Button
    const [buttonState, setButtonState] = useState({
        label: "Waiting for Payment",
        disabled: true,
        color: "mealshub-greenpalet",
        onClick: () => { },
    });

    useEffect(() => {
        getOrderSummaryData();
    }, []);

    useEffect(() => {
        // Update button state based on payment and order status
        if (joinedOrderDetailsData.length > 0) {
            const paymentStatus = joinedOrderDetailsData[0].paymentstatus;
            const orderStatus = joinedOrderDetailsData[0].orderstatus;

            if (paymentStatus === "Waiting for Confirmation") {
                setButtonState({
                    label: "Waiting for Payment",
                    disabled: true,
                    color: "mealshub-greenpalet",
                    onClick: () => { },
                });
            } else if (paymentStatus === "Confirmed" && orderStatus === "Waiting for Payment") {
                setButtonState({
                    label: "Prepare Order",
                    disabled: false,
                    color: "mealshub-red",
                    onClick: handlePrepareOrder,
                });
            } else if (paymentStatus === "Confirmed" && orderStatus === "Prepared") {
                setButtonState({
                    label: "Complete Order",
                    disabled: false,
                    color: "mealshub-red",
                    onClick: handleCompleteOrder,
                });
            }
            else if (paymentStatus === "Confirmed" && orderStatus === "Completed") {
                setButtonState({
                    label: "Completed",
                    disabled: true,
                    color: "mealshub-greenpalet",
                    onClick: handleCompleteOrder,
                });
            }
        }
    }, [joinedOrderDetailsData]);

    const handlePrepareOrder = async () => {
        // Call API or perform actions to update order status to "Prepared"
        await Axios.patch(`http://localhost:8000/orders/${orderid}`, {
            status: "Prepared"
        });
        getOrderDetailsData();
        // Set button state accordingly
        setButtonState({
            label: "Complete Order",
            disabled: false,
            color: "mealshub-red",
            onClick: handleCompleteOrder,
        });
    };

    const handleCompleteOrder = async () => {
        // Call API or perform actions to update order status to "Completed"
        await Axios.patch(`http://localhost:8000/orders/${orderid}`, {
            status: "Completed"
        });
        getOrderDetailsData();
        // Set button state accordingly
        setButtonState({
            label: "Completed",
            disabled: true,
            color: "mealshub-greenpalet",
            onClick: () => { },
        });
    };
    return (
        // Create grid layout for sidebard, header, and main content
        <div className="grid grid-cols-5 grid-rows-8 bg-mealshub-cream min-h-screen">
            {/* Sidebar */}
            <div className="col-span-1 row-span-8">
                <Sidebar
                    default="/tenantpage/menus"
                    number={2}
                    current={2}
                    menu1="Menu"
                    path1="M0 0H27V32H0V0ZM2.7 3.2V12H24.3V3.2H2.7ZM24.3 15.2H2.7V28.8H24.3V15.2ZM5.3946 6.4H8.1V9.6H8.0946V9.6064H5.3946V6.4ZM10.8 6.4H21.6V9.6H10.8V6.4Z"
                    page1="/tenantpage/menus"
                    menu2="Orders"
                    path2="M4.10306 1.10306C3 2.20612 3 3.97929 3 7.52941V24.4706C3 28.0207 3 29.7939 4.10306 30.8969C5.20612 32 6.97929 32 10.5294 32H21.8235C25.3736 32 27.1468 32 28.2499 30.8969C29.3529 29.7939 29.3529 28.0207 29.3529 24.4706V7.52941C29.3529 3.97929 29.3529 2.20612 28.2499 1.10306C27.1468 -1.12197e-07 25.3736 0 21.8235 0H10.5294C6.97929 0 5.20612 -1.12197e-07 4.10306 1.10306ZM10.5294 7.52941C10.0302 7.52941 9.5514 7.72773 9.19839 8.08074C8.84538 8.43375 8.64706 8.91253 8.64706 9.41176C8.64706 9.911 8.84538 10.3898 9.19839 10.7428C9.5514 11.0958 10.0302 11.2941 10.5294 11.2941H21.8235C22.3228 11.2941 22.8015 11.0958 23.1546 10.7428C23.5076 10.3898 23.7059 9.911 23.7059 9.41176C23.7059 8.91253 23.5076 8.43375 23.1546 8.08074C22.8015 7.72773 22.3228 7.52941 21.8235 7.52941H10.5294ZM10.5294 15.0588C10.0302 15.0588 9.5514 15.2571 9.19839 15.6102C8.84538 15.9632 8.64706 16.4419 8.64706 16.9412C8.64706 17.4404 8.84538 17.9192 9.19839 18.2722C9.5514 18.6252 10.0302 18.8235 10.5294 18.8235H21.8235C22.3228 18.8235 22.8015 18.6252 23.1546 18.2722C23.5076 17.9192 23.7059 17.4404 23.7059 16.9412C23.7059 16.4419 23.5076 15.9632 23.1546 15.6102C22.8015 15.2571 22.3228 15.0588 21.8235 15.0588H10.5294ZM10.5294 22.5882C10.0302 22.5882 9.5514 22.7866 9.19839 23.1396C8.84538 23.4926 8.64706 23.9714 8.64706 24.4706C8.64706 24.9698 8.84538 25.4486 9.19839 25.8016C9.5514 26.1546 10.0302 26.3529 10.5294 26.3529H18.0588C18.5581 26.3529 19.0368 26.1546 19.3898 25.8016C19.7429 25.4486 19.9412 24.9698 19.9412 24.4706C19.9412 23.9714 19.7429 23.4926 19.3898 23.1396C19.0368 22.7866 18.5581 22.5882 18.0588 22.5882H10.5294Z"
                    page2="/tenantpage/orders"
                />
            </div>
            {/* Header */}
            <div className="col-span-4">
                <div className="row-span-1 ms-20 mt-9 py-3 w-11/12">
                    <Welcome user="Aldaebaran" />
                </div>
                <div className="absolute top-0 right-0 mt-9 mx-12">
                    <Profile image="/public/images/ProfileDefault.jpg" onProfileClick={handleProfileClick} />
                </div>
                <div className="absolute top-12 right-0 mt-9 mx-12">
                    {showProfileDropDown && <ProfileDropDown name="Aldaebaran" email="Aldaebaran@example.com" />}
                </div>
                <div className="row-span-7 mt-6 mb-9 w-11/12">
                    <div className="ms-4">
                        <BackButton page="/tenantpage/orders" />
                    </div>
                    <div className="ms-20 py-12 bg-white rounded-3xl">
                        <h2 className="text-mealshub-red text-3xl font-bold ms-16">Order Details</h2>
                        <OrderDetailsCard data={joinedOrderDetailsData} />
                        <OrderSummaryCard data={joinedOrderSummaryData} customer={false} />
                        <div className="flex flex-col items-center">
                            <button
                                onClick={buttonState.onClick}
                                disabled={buttonState.disabled}
                                className={`mt-4 px-6 py-2 w-1/4 text-white text-lg font-nunito font-semibold shadow-xl rounded-full bg-${buttonState.color}`}
                            >
                                {buttonState.label}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}