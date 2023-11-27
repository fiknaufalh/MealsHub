import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface LoginFormInput {
    num_seat: string;
    id_table: string;
}

export default function RegisterTableCard() {
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

    const submit: SubmitHandler<LoginFormInput> = async () => {
        const email = `table${idTable}@gmail.com`;
        await login(email, "table", "customer");
    };

    const [numSeat, setNumSeat] = useState<string>("");
    const [idTable, setIdTable] = useState<string>("");

    function handleSelectNumSeat(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log(event.target.value);
        setNumSeat(event.target.value);
    }

    function handleSelectIdTable(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log(event.target.value);
        setIdTable(event.target.value);
    }

    return (
        <div className="h-3/4 w-3/4 bg-white rounded-3xl shadow-xl py-10 px-16">
            <h1 className="text-mealshub-orange text-3xl font-bold text-center mb-16">
                Register Table
            </h1>
            <form onSubmit={handleSubmit(submit)}>
                <h2 className="text-mealshub-orange text-xl font-bold mb-4">
                    Number of People
                </h2>
                <div className="flex flex-row mb-8">
                    <div className="flex flex-row h-16 w-1/6 bg-mealshub-orange rounded-2xl justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="25"
                            viewBox="0 0 56 36"
                            fill="none"
                        >
                            <path
                                d="M38 15.5C42.15 15.5 45.475 12.15 45.475 8C45.475 3.85 42.15 0.5 38 0.5C33.85 0.5 30.5 3.85 30.5 8C30.5 12.15 33.85 15.5 38 15.5ZM18 15.5C22.15 15.5 25.475 12.15 25.475 8C25.475 3.85 22.15 0.5 18 0.5C13.85 0.5 10.5 3.85 10.5 8C10.5 12.15 13.85 15.5 18 15.5ZM18 20.5C12.175 20.5 0.5 23.425 0.5 29.25V35.5H35.5V29.25C35.5 23.425 23.825 20.5 18 20.5ZM38 20.5C37.275 20.5 36.45 20.55 35.575 20.625C38.475 22.725 40.5 25.55 40.5 29.25V35.5H55.5V29.25C55.5 23.425 43.825 20.5 38 20.5Z"
                                fill="white"
                            />
                        </svg>
                    </div>

                    <select
                        id="category"
                        className="ml-4 border-2 border-mealshub-orange focus:ring-mealshub-orange focus:border-mealshub-orange text-gray-500 text-normal rounded-xl block w-full p-4"
                        onChange={handleSelectNumSeat}
                        defaultValue={numSeat}
                    >
                        <option selected={true}>Number of People</option>
                        <option value="1">4</option>
                        <option value="2">2</option>
                        <option value="3">5</option>
                        <option value="4">8</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <h2 className="text-mealshub-orange text-xl font-bold mb-4">
                    Number of Table
                </h2>
                <div className="flex flex-row mb-8">
                    <div className="flex flex-row h-16 w-1/6 bg-mealshub-orange rounded-2xl justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 50 50"
                            fill="none"
                        >
                            <path
                                d="M32.5 5.55556V25H17.5V5.55556H32.5ZM32.5 0H17.5C16.1739 0 14.9021 0.585316 13.9645 1.62718C13.0268 2.66905 12.5 4.08213 12.5 5.55556V30.5556H37.5V5.55556C37.5 4.08213 36.9732 2.66905 36.0355 1.62718C35.0979 0.585316 33.8261 0 32.5 0ZM50 19.4444H42.5V27.7778H50V19.4444ZM7.5 19.4444H0V27.7778H7.5V19.4444ZM45 33.3333H5V50H10V38.8889H40V50H45V33.3333Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <select
                        id="category"
                        className="ml-4 border-2 border-mealshub-orange focus:ring-mealshub-orange focus:border-mealshub-orange text-gray-500 text-normal rounded-xl block w-full p-4"
                        onChange={handleSelectIdTable}
                        value={idTable}
                    >
                        <option
                            selected={true}
                            className="hover:bg-mealshub-orange"
                        >
                            Table Number
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-mealshub-orange font-bold text-xl rounded-full px-5 py-4 text-center shadow-xl mt-8 mt-3 hover:bg-mealshub-cream focus:ring-4 focus:outline-none focus:ring-primary-300 "
                >
                    Get Table
                </button>
            </form>
        </div>
    );
}
