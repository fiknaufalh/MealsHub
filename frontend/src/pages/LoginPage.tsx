import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../components/Logo";
import Input from "../components/Input";

interface LoginFormInput {
    email: string;
    password: string;
}

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginFormInput>();

    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [params] = useSearchParams();
    const returnUrl = params.get("returnUrl");

    useEffect(() => {
        if (!user) return;
        returnUrl ? navigate(returnUrl) : navigate("/");
    }, [user]);

    const submit: SubmitHandler<LoginFormInput> = async ({
        email,
        password,
    }) => {
        console.log(`email: ${email}, password: ${password}. MASUK`);
        await login(email, password);
    };

    return (
        <div className="grid min-h-screen bg-[url('images/LoginBackground.png')]">
            <div className="login-container">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-4xl xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center">
                            <div className="p-4 space-y-4 md:space-y-6 sm:p-6 w-full">
                                <h1 className="text-xl font-lato font-bold leading-tight tracking-tight text-mealshub-orange md:text-4xl text-center">
                                    LOGIN
                                </h1>
                                <form
                                    className="space-y-4 md:space-y-6"
                                    onSubmit={handleSubmit(submit)}
                                    noValidate
                                >
                                    <Input
                                        type="email"
                                        label="Email"
                                        {...register("email", {
                                            required: true,
                                            pattern: {
                                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                                                message: "Email is not valid.",
                                            },
                                            minLength: 8,
                                            maxLength: 30,
                                        })}
                                        error={errors.email}
                                    />
                                    <Input
                                        type="password"
                                        label="Password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 30,
                                        })}
                                        error={errors.password}
                                    />
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
            </div>
        </div>
    );
}
