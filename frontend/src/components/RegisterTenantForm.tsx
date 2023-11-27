export default function RegisterTenant() {
    return (
        <div className="relative bg-white rounded-xl px-16">
            <div className="flex flex-col items-center justify-between mt-4 p-4 md:p-5">
                <h1 className="text-5xl font-bold text-mealshub-orange">
                    Register
                </h1>
            </div>

            <form action="#" className="p-4 md:p-5">
                <div className="gap-4 mb-4">
                    <div className="my-2">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="image"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Image
                        </label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Image URL"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="openhour"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Open Hour
                        </label>
                        <input
                            type="text"
                            name="openhour"
                            id="openhour"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Open Hour"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="closehour"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Close Hour
                        </label>
                        <input
                            type="text"
                            name="closehour"
                            id="closehour"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Close Hour"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-xl font-bold text-mealshub-orange"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            rows={4}
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5"
                            placeholder="Write your tenant description here"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-mealshub-orange hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-2xl text-xl px-5 py-2.5 justify-center w-full h-16 mb-8"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
