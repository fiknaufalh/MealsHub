import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RegisterFormInput {
    fullname: string;
    email: string;
    username: string;
    password: string;
    role: string;
}

export default function RegisterForm() {
    const { handleSubmit, register } = useForm<RegisterFormInput>();
    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();
    const { user, registers } = useAuth();
    const params = useParams();
    const [searchParams] = useSearchParams();
    const returnUrl = searchParams.get("returnUrl");

    const selectedRole = params.role as string;

    useEffect(() => {
        if (!user) return;
        let targetRoute = "";
        if (selectedRole === "tenant") {
            targetRoute = "/tenant/menus";
        } else if (selectedRole === "cashier") {
            targetRoute = "/cashier/payments";
        } else if (selectedRole === "customer") {
            targetRoute = "/";
        }
        returnUrl ? navigate(returnUrl) : navigate(targetRoute);
    }, [user]);

    const submit: SubmitHandler<RegisterFormInput> = async ({
        fullname,
        email,
        username,
        password,
        role,
    }) => {
        console.log(
            `fullname: ${fullname}, email: ${email}, username: ${username}, password: ${password}, role:${role} MASUK`,
        );
        await registers(fullname, email, username, password, selectedRole);
    };

    return (
        <div className="relative bg-white rounded-xl px-16">
            <div className="flex flex-col items-center justify-between mt-4 p-4 md:p-5">
                <h1 className="text-5xl font-bold text-mealshub-orange">
                    Register
                </h1>
            </div>

            <form
                onSubmit={handleSubmit(submit)}
                noValidate
                className="p-4 md:p-5"
            >
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
                            id="fullname"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Name"
                            required
                            {...register("fullname", {
                                required: true,
                            })}
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
                            id="email"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Email"
                            required
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                                    message: "Email is not valid.",
                                },
                            })}
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
                            id="username"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Username"
                            required
                            {...register("username", {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="my-2">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-xl font-bold text-mealshub-orange "
                            {...register("password", {
                                required: true,
                            })}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="font-nunito bg-white border border-mealshub-orange text-gray-900 text-m rounded-2xl focus:ring-mealshub-orange focus:border-mealshub-orange block w-96 px-4 p-2.5 h-14"
                            placeholder="Password"
                            required
                            {...register("password", {
                                required: true,
                            })}
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
