interface OrderSummaryCardProps {
    name: string,
    orderlist: (string | number)[][];
}

export default function OrderSummaryCard({data}: {data: OrderSummaryCardProps[]}) {
    const orderdetails = data.map(({name, orderlist}) => {
        const orderList = () => {
            const orderList = orderlist.map((order: any) => {
                const price = order[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")            
                return (
                    <div className="flex justify-between py-7">
                        <p className="w-full font-normal text-lg text-gray-500 text-left">{order[0]}</p>
                        <p className="w-full font-normal text-lg text-gray-500 text-center">{order[1]}</p>
                        <p className="w-full font-normal text-lg text-gray-500 text-right">Rp {price},00</p>
                    </div>
                )
            })
    
            return orderList
        }
    
        const totalPrice = () => {
            let totalPrice = 0
            orderlist.forEach((order: any) => {
                totalPrice += order[2] * order[1]
            })
    
            return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    
        return (
            <div className="flex bg-white md:flex-row mx-16">
                <div className="flex flex-col w-full leading-normal">
                    <div className="flex justify-between border-b border-gray-300 py-5">
                        <h5 className="font-bold text-2xl text-gray-900">{name}</h5>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                                <path d="M3.34838 21.5784C3.09007 21.8512 2.7613 22 2.37382 22C1.59887 22 0.976563 21.3551 0.976563 20.5366C0.976563 20.1274 1.14095 19.7554 1.411 19.4701L9.63018 10.9876L1.411 2.52988C1.14095 2.24464 0.976563 1.8602 0.976563 1.46336C0.976563 0.64487 1.59887 0 2.37382 0C2.7613 0 3.09007 0.148816 3.34838 0.421646L12.4834 9.84667C12.8122 10.1691 12.9648 10.566 12.9766 11C12.9766 11.434 12.8122 11.8061 12.4834 12.1409L3.34838 21.5784Z" fill="#020202"/>
                            </svg>   
                        </div>
                    </div>
                    <div className="border-b border-gray-300">
                        {orderList()}
                    </div>
                    <div className="flex justify-between py-7">
                        <p className="w-full font-bold text-lg text-gray-500 text-left">Total Price</p>
                        <p className="w-full font-bold text-lg text-gray-500 text-right">Rp {totalPrice()},00</p>
                    </div>
                </div>
            </div>
        )
    });

    return orderdetails;
}