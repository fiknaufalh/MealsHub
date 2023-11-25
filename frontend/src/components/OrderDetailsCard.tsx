interface OrderDetailsCardProps {
    orderid: number,
    code: number,
    tableid: number,
    time: Date,
    orderstatus: string,
    paymentstatus: string
}

export default function OrderDetailsCard({data}: {data: OrderDetailsCardProps[]}) {
    const orderdetails = data.map(({ orderid, code, tableid, time, orderstatus, paymentstatus }) => {
        return (
            <div className="font-nunito flex bg-white justify-start py-10 md:flex-row mx-16">
                <div className="flex flex-col w-40 leading-normal">
                    <p className="mb-3 font-semibold text-lg text-gray-900 w-11/12">Order ID</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">Unique Code</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">Table ID</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">Order Time</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">Order Status</p>
                    <p className="mt-3 font-semibold text-lg text-gray-900 w-11/12">Payment Status</p>
                </div>
                <div className="flex flex-col w-2 leading-normal">
                    <p className="mb-3 font-semibold text-lg text-gray-900 w-11/12">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">:</p>
                    <p className="my-3 font-semibold text-lg text-gray-900 w-11/12">:</p>
                    <p className="mt-3 font-semibold text-lg text-gray-900 w-11/12">:</p>
                </div>
                <div className="flex flex-col w-5/6 leading-normal ms-2">
                    <p className="mb-3 font-normal text-lg text-gray-900 w-11/12">{orderid}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-11/12">{code}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-11/12">{tableid}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-11/12">{`${time}`}</p>
                    <p className="my-3 font-normal text-lg text-gray-900 w-11/12">{orderstatus}</p>
                    <p className="mt-3 font-normal text-lg text-gray-900 w-11/12">{paymentstatus}</p>
                </div>
            </div>
        )
    });

    return orderdetails;
}
