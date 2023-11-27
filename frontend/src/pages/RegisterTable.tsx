import { useNavigate } from "react-router-dom";

import RegisterTableCard from "../components/RegisterTableCard";

export default function RegisterTable() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="relative">
            <img
                src="../../public/images/RegisterTableImage.png"
                alt=""
                className="absolute top-0 left-0 w-full h-full opacity-50"
                style={{ zIndex: -1 }}
            />
            <div className="grid grid-cols-2 min-h-screen relative">
                <div className="relative z-10">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
                        <h1 className="text-7xl font-bold text-white text-center drop-shadow-xl">
                            GET YOUR SEAT
                        </h1>
                        <span className="bg-mealshub-blue text-white font-lato font-bold text-lg my-16 px-24 py-2">
                            Secure Your Comfort, Reserve Your Space
                        </span>
                        <button
                            onClick={handleGoBack}
                            className="text-white text-lg font-lato bg-mealshub-orange px-4 py-2 rounded-md cursor-pointer"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center z-10">
                    <RegisterTableCard />
                </div>
            </div>
        </div>
    );
}
