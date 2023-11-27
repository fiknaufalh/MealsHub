import Axios from "axios";
import { useEffect, useState } from "react";
import crypto from "crypto-js";

export default function joinedOrderPayment() {
    const [joinedData, setJoinedData] = useState([]);

    const getData = async () => {
        const orderResponse = await Axios.get("http://localhost:8000/orders");
        const paymentResponse = await Axios.get("http://localhost:8000/payments");

        const orderData = orderResponse.data.data;
        const paymentData = paymentResponse.data.data;

        // Perform the join based on the specified conditions
        const result = orderData.map((order: { id: number; id_table: number; time: Date; status: string; id_tenant: string }) => {
            const matchingPayment = paymentData.find((payment: { id_order: number; }) => payment.id_order === order.id);

            // Hash the paymentId using SHA-256 from crypto-js and take the first 5 characters
            const hashedPaymentId = matchingPayment ? crypto.SHA256(matchingPayment.id.toString()).toString().substring(0, 5) : null;

            return {
                orderId: order.id,
                paymentId: matchingPayment ? hashedPaymentId : null,
                tableId: order.id_table,
                time: order.time,
                orderStatus: order.status,
                paymentStatus: matchingPayment ? matchingPayment.status : null,
                tenantId: order.id_tenant,
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
