import React from "react";

interface AddFormProps {
    onClose: () => void;
}

const AddForm: React.FC<AddFormProps> = (props) => {
    return (
        <div className="flex overflow-y-auto overflow-x-hidden fixed justify-center items-center w-full md:inset-0 min-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-gray-200 rounded-2xl">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Create New Product
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={props.onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form action="#" className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mealshub-blue focus:border-mealshub-blue block w-full p-2.5"
                                    placeholder="Type product name"
                                    required
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label
                                    htmlFor="stock"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    name="stock"
                                    id="stock"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mealshub-blue focus:border-mealshub-blue block w-full p-2.5"
                                    placeholder="0"
                                    required
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mealshub-blue focus:border-mealshub-blue block w-full p-2.5"
                                    placeholder="Rp 0"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Product Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mealshub-blue focus:border-mealshub-blue "
                                    placeholder="Write product description here"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-mealshub-blue hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                                onClick={props.onClose}
                            >
                                <svg
                                    className="me-1 -ms-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Add new product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddForm;
