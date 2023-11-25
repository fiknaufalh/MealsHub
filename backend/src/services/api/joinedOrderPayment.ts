import Axios from "axios";
import { useEffect, useState } from "react";

export default function joinedOrderPayment() {
    const [joinedData, setJoinedData] = useState([]);

    const getData = async () => {
        const orderResponse = await Axios.get("http://localhost:8000/orders");
        const paymentResponse = await Axios.get("http://localhost:8000/payments");

        const orderData = orderResponse.data.data;
        const paymentData = paymentResponse.data.data;

        // Perform the join based on the specified conditions
        const result = orderData.map((order: { id: number; id_table: number; time: Date; status: string; }) => {
            const matchingPayment = paymentData.find((payment: { id_order: number; }) => payment.id_order === order.id);

            return {
                orderId: order.id,
                paymentId: matchingPayment ? matchingPayment.id : null,
                tableId: order.id_table,
                time: order.time,
                orderStatus: order.status,
                paymentStatus: matchingPayment ? matchingPayment.status : null,
            };
        });

        setJoinedData(result);

    };

    useEffect(() => {
        getData();
    }, []);

    console.log(joinedData);

    return joinedData;
}