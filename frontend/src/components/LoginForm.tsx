import Logo from "./Logo";

export default function LoginForm() {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-4xl xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center">
                        <div className="p-4 space-y-4 md:space-y-6 sm:p-6 w-full">
                            <h1 className="text-xl font-lato font-bold leading-tight tracking-tight text-mealshub-orange md:text-4xl text-center">
                                LOGIN
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-md font-medium text-mealshub-blue"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-md font-medium text-mealshub-blue"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required={true}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required={true}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-mealshub-blue hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-mealshub-orange hover:bg-mealshub-cream focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Login
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Don't have an account yet?{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-mealshub-blue hover:underline"
                                    >
                                        Register
                                    </a>
                                </p>
                            </form>
                        </div>
                        <div className="p-12">
                            <Logo height="30" width="30" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
