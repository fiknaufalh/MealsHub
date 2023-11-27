import RegisterTenantForm from "../components/RegisterTenantForm";

export default function RegisterTenant() {
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
                    <span className="bg-mealshub-blue text-white font-nunito font-bold text-lg my-16 px-24 py-2">
                        Discover a new way to dine!
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center bg-mealshub-cream col-span-1">
                <RegisterTenantForm />
            </div>
        </div>
    );
}
