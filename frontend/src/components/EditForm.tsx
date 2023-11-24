export default function EditForm() {
    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-lg" >
                        <h3 className="text-lg font-semibold text-gray-900">
                            Edit Menu Product
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form action="#" className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mealshub-blue focus:border-mealshub-blue block w-full p-2.5" placeholder="Type product name" required />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
                                <input type="number" name="stock" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mealshub-blue focus:border-mealshub-blue block w-full p-2.5" placeholder="0" required />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mealshub-blue focus:border-mealshub-blue block w-full p-2.5" placeholder="Rp 0" required />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                                <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mealshub-blue focus:border-mealshub-blue " placeholder="Write product description here"></textarea>
                            </div>
                        </div >
                        <div className="flex flex-col items-center justify-center">
                            <button type="submit" className="text-white inline-flex items-center bg-mealshub-blue hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                                Edit Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}