type OrderCardProps = {
    image: string;
    name: string;
    status: string;
    orderlist: (string | number)[][];
    price: number;
}

export default function OrderCard({data}: {data: OrderCardProps[]}) {
    const orderlist = data.map(({image, name, status, orderlist, price}) => {
        const orderStatus = () => {
            if (status === "Waiting for Payment") {
                return (
                    <div className="flex text-white bg-mealshub-red h-6 w-6 rounded-full text-sm justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M3.78837 3.35712C3.22004 3.35712 2.675 3.58288 2.27314 3.98474C1.87127 4.38661 1.64551 4.93165 1.64551 5.49997V5.92854H15.3575V5.49997C15.3575 4.93165 15.1317 4.38661 14.7299 3.98474C14.328 3.58288 13.783 3.35712 13.2147 3.35712H3.78837ZM1.64551 11.5V6.78569H15.3575V11.5C15.3575 12.0683 15.1317 12.6133 14.7299 13.0152C14.328 13.4171 13.783 13.6428 13.2147 13.6428H3.78894C3.22062 13.6428 2.67557 13.4171 2.27371 13.0152C1.87184 12.6133 1.64608 12.0683 1.64608 11.5H1.64551ZM10.9289 9.92854C10.8153 9.92854 10.7063 9.9737 10.6259 10.0541C10.5455 10.1344 10.5004 10.2435 10.5004 10.3571C10.5004 10.4708 10.5455 10.5798 10.6259 10.6602C10.7063 10.7405 10.8153 10.7857 10.9289 10.7857H12.9289C13.0426 10.7857 13.1516 10.7405 13.232 10.6602C13.3124 10.5798 13.3575 10.4708 13.3575 10.3571C13.3575 10.2435 13.3124 10.1344 13.232 10.0541C13.1516 9.9737 13.0426 9.92854 12.9289 9.92854H10.9289Z" fill="white"/>
                        </svg>
                    </div>
                );
            } else if (status === "Prepared") {
                return (
                    <div className="flex text-white bg-mealshub-orange h-6 w-6 rounded-full text-sm justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M8.83333 1.5C7.65333 1.5 6.61333 2.28 6.28 3.41333C5.92667 3.25333 5.55333 3.16667 5.16667 3.16667C4.45942 3.16667 3.78115 3.44762 3.28105 3.94772C2.78095 4.44781 2.5 5.12609 2.5 5.83333C2.50158 6.42389 2.69866 6.9973 3.06048 7.46405C3.4223 7.93079 3.92848 8.26459 4.5 8.41333V13.1667H13.1667V8.41333C14.34 8.10667 15.1667 7.04667 15.1667 5.83333C15.1667 5.12609 14.8857 4.44781 14.3856 3.94772C13.8855 3.44762 13.2072 3.16667 12.5 3.16667C12.1133 3.16667 11.74 3.25333 11.3867 3.41333C11.0533 2.28 10.0133 1.5 8.83333 1.5ZM8.5 7.5H9.16667V12.1667H8.5V7.5ZM6.5 8.83333H7.16667V12.1667H6.5V8.83333ZM10.5 8.83333H11.1667V12.1667H10.5V8.83333ZM4.5 13.8333V14.5C4.5 14.6768 4.57024 14.8464 4.69526 14.9714C4.82029 15.0964 4.98986 15.1667 5.16667 15.1667H12.5C12.6768 15.1667 12.8464 15.0964 12.9714 14.9714C13.0964 14.8464 13.1667 14.6768 13.1667 14.5V13.8333H4.5Z" fill="white"/>
                        </svg>
                    </div>
                );
            } else if (status === "Completed") {
                return (
                    <div className="flex text-white bg-mealshub-blue h-6 w-6 rounded-full text-sm justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.471 4.52869C13.5959 4.65371 13.6661 4.82324 13.6661 5.00002C13.6661 5.1768 13.5959 5.34634 13.471 5.47135L7.13762 11.8047C7.0126 11.9297 6.84306 11.9999 6.66629 11.9999C6.48951 11.9999 6.31997 11.9297 6.19495 11.8047L3.19495 8.80469C3.07352 8.67895 3.00632 8.51055 3.00784 8.33575C3.00936 8.16096 3.07947 7.99375 3.20307 7.87014C3.32668 7.74654 3.49389 7.67642 3.66869 7.6749C3.84348 7.67339 4.01189 7.74058 4.13762 7.86202L6.66629 10.3907L12.5283 4.52869C12.6533 4.40371 12.8228 4.3335 12.9996 4.3335C13.1764 4.3335 13.3459 4.40371 13.471 4.52869Z" fill="white"/>
                        </svg>
                    </div>
                );
            }
        }
        
        const orderList = () => {
            let orderList = "";
            for (let i = 0; i < orderlist.length; i++) {
                orderList += orderlist[i][1] + " " + orderlist[i][0];
                if (i !== orderlist.length - 1) {
                    orderList += ", ";
                }
            }
            return (
                <p className="mt-2 font-normal text-lg text-gray-700 w-11/12">{orderList}</p>
            );
        }
    
        const priceidr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        
        return (
            <div className="flex flex-row bg-white border-b border-gray-300 py-10 md:flex-row mx-16 justify-start">
                <div className="flex">
                    <div className="flex flex-row h-36 w-36 rounded-3xl md:rounded-3xl">
                        <img src={`../../public/images/${image}`} alt={name} className="object-cover h-full w-full rounded-3xl">
                        </img>
                    </div>
                </div>
                <div className="flex flex-col w-full leading-normal ms-12">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 w-11/12">{name}</h5>
                    <div className="flex flex-col md:flex-row items-center my-2">
                        {orderStatus()}
                        <p className="font-normal text-lg text-gray-700 w-11/12 ms-3">{status}</p>
                    </div>
                    {orderList()}
                </div>
                <div className="flex flex-col w-3/12 justify-between">
                    <p className="font-normal text-lg text-gray-700 text-right">Rp {priceidr},00</p>
                    <div className="flex flex-col items-end">
                        <button type="button" className="w-24 text-mealshub-blue bg-white hover:text-white border-2 border-mealshub-blue hover:bg-mealshub-blue font-bold text-lg rounded-full text-sm px-5 py-2.5 text-center">Details</button>
                    </div>
                </div>
            </div>
        );
    });

    return orderlist;
}