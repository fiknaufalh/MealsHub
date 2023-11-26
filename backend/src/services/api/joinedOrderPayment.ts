import Axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    orderId: number;
    paymentId: number;
    tableId: number;
    time: number;
    orderStatus: string;
    paymentStatus: string;
    totalPrice: number;
}

export default function joinedOrderPayment() {
    const [joinedData, setJoinedData] = useState<Props[]>([]);

    const getData = async () => {
        try {
            const orderResponse = await Axios.get("http://localhost:8000/orders");
            const paymentResponse = await Axios.get("http://localhost:8000/payments");

            const orderData = orderResponse.data.data;
            const paymentData = paymentResponse.data.data;

            // Perform the join based on the specified conditions
            const result: Props[] = await Promise.all(orderData.map(async (order: { id: number; id_table: number; time: Date; status: string; id_tenant: string }) => {
                const matchingPayment = paymentData.find((payment: { id_order: number; }) => payment.id_order === order.id);

                // Fetch total price from products and order_products for each order
                const orderProductResponse = await Axios.get(`http://localhost:8000/orderproduct`);
                const orderProductData = orderProductResponse.data.data;

                const productPrices = orderProductData.map(async (orderProduct: { id_product: number; num: number }) => {
                    const productResponse = await Axios.get(`http://localhost:8000/products/${orderProduct.id_product}`);
                    const productData = productResponse.data;

                    // Return the calculated price for this product
                    return productData.price * orderProduct.num;
                });

                // Use Promise.all to wait for all productPrices promises to resolve
                const totalPriceArray = await Promise.all(productPrices);

                // Calculate the sum of all prices using .reduce
                const totalPrice = totalPriceArray.reduce((acc, price) => acc + price, 0);
                return {
                    orderId: order.id,
                    paymentId: matchingPayment ? matchingPayment.id : null,
                    tableId: order.id_table,
                    time: order.time,
                    orderStatus: order.status,
                    paymentStatus: matchingPayment ? matchingPayment.status : null,
                    tenantId: order.id_tenant,
                    totalPrice: totalPrice,
                };
            }));

            setJoinedData(result);
        } catch (error) {
            console.error('Error fetching joined order payment data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(joinedData);

    return joinedData;
}
