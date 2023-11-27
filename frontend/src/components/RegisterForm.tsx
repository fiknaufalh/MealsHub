export default function RegisterForm() {
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
                            htmlFor="fullname"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="username"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                        >
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Password"
                            required
                        />
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
