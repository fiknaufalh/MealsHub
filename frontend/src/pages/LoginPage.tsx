import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Input from "../components/Input";
import LoginForm from "../components/LoginForm";

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
        await login(email, password);
    };

    return (
        <div className="grid min-h-screen bg-[url('images/LoginBackground.png')]">
            <div className="login-container">
                <LoginForm />
            </div>
        </div>
    );
}
