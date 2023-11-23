interface OrderDetailsCardProps {
    orderid: string,
    code: string,
    tableid: string,
    time: string,
    orderstatus: string,
    paymentstatus: string
}

const OrderDetails: OrderDetailsCardProps[] = [
    {
        orderid: "ABC1",
        code: "A123",
        tableid: "1",
        time: "2023-10-28 11:30",
        orderstatus: "Waiting for payment",
        paymentstatus: "Waiting for payment"
    }
];

export default function OrderDetailsCard() {
    const orderdetails = OrderDetails.map(({ orderid, code, tableid, time, orderstatus, paymentstatus }) => {
        return (
            <div className="font-nunito flex bg-white justify-start py-10 md:flex-row mx-16">
                <div className="flex flex-col w-40 leading-normal">
                    <p className="mb-3 font-semibold text-lg text-gray-900 w-5/6">Order ID</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">Unique Code</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">Table ID</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">Order Time</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">Order Status</p>
                    <p className="mt-3 font-semibold text-lg text-gray-900 w-5/6">Payment Status</p>
                </div>
                <div className="flex flex-col w-2 leading-normal">
                    <p className="mb-3 font-semibold text-lg text-gray-900 w-5/6">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-5/6">:</p>
                    <p className="mt-3 font-semibold text-lg text-gray-900 w-5/6">:</p>
                </div>
                <div className="flex flex-col w-5/6 leading-normal ms-2">
                    <p className="mb-3 font-normal text-lg text-gray-900 w-5/6">{orderid}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-5/6">{code}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-5/6">{tableid}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-5/6">{time}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-5/6">{orderstatus}</p>
                    <p className="mt-3 font-normal text-lg text-gray-900 w-5/6">{paymentstatus}</p>
                </div>
            </div>
        )
    });

    return orderdetails;
}
