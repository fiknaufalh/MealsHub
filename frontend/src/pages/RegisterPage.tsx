import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="col-span-1 relative">
                <img
                    src="../../public/images/SignUpImg.png"
                    alt=""
                    className="absolute opacity-50 h-screen min-w-full"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
                    <h1 className="text-9xl font-bold text-white drop-shadow-2xl">
                        JOIN US
                    </h1>
                    <div className="bg-mealshub-blue text-white font-nunito font-bold text-lg mt-16 mb-8 px-24 py-2">
                        Discover a new way to dine!
                    </div>
                    <button
                        onClick={handleGoBack}
                        className="bg-mealshub-orange text-white px-4 py-2 rounded-lg hover:bg-mealshub-cream focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm"
                    >
                        Go Back
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center bg-mealshub-cream col-span-1">
                <RegisterForm />
            </div>
        </div>
    );
}
