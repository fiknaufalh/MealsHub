import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../components/Logo";
import Input from "../components/Input";

interface LoginFormInput {
    email: string;
    password: string;
}

export default function LoginPage() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginFormInput>();

    const navigate = useNavigate();
    const { user, login } = useAuth();
    const param = useParams();
    const [searchParams] = useSearchParams();
    const returnUrl = searchParams.get("returnUrl");

    const selectedRole = param.role as string;
    useEffect(() => {
        if (!user) return;
        let targetUrl = "";
        if (selectedRole === "tenant") {
            targetUrl = returnUrl ? returnUrl : "/tenant/menus";
        } else if (selectedRole === "cashier") {
            targetUrl = returnUrl ? returnUrl : "/cashier/payments";
        } else if (selectedRole === "customer") {
            targetUrl = returnUrl ? returnUrl : "/";
        }
        returnUrl ? navigate(returnUrl) : navigate(targetUrl);
    }, [user]);

    const submit: SubmitHandler<LoginFormInput> = async ({
        email,
        password,
    }) => {
        console.log(`email: ${email}, password: ${password}. MASUK`);
        await login(email, password, selectedRole);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="grid min-h-screen bg-[url('../public/images/LoginBackground.png')]">
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
                                        })}
                                        error={errors.email}
                                    />
                                    <Input
                                        type="password"
                                        label="Password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                        error={errors.password}
                                    />
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-mealshub-orange hover:bg-mealshub-cream focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Login
                                    </button>
                                    <div className="flex items-center justify-center">
                                        <p className="text-sm font-light text-gray-500">
                                            Don't have an account yet?{" "}
                                            <a
                                                href={`/register/${selectedRole}`}
                                                className="font-medium text-mealshub-blue hover:underline"
                                            >
                                                Register
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div className="p-12">
                                <Logo height="30" width="30" />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleGoBack}
                        className="mt-3 bg-mealshub-orange text-white px-4 py-2 rounded-lg hover:bg-mealshub-cream focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
