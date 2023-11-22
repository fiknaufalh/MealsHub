export default function Table() {
    return (
        <div className="font-nunito relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-s text-mealshub-golden bg-mealshub-blue">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center font-medium">
                                Order Id
                                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg></a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center font-medium">
                                Unique Code
                                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg></a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
                            Table Id
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
                            Order Time
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
                            Order Status
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
                            Payment Status
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ABC1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A123
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            2023-10-28 11:30
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            In Progress
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                            Waiting for payment
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="text-mealshub-blue hover:underline">Click for Details</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


