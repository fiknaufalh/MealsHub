import SignUpCardTenant from "../components/SignUpCardTenant";

export default function SignUpTenant() {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="relative">
                <img src="../../public/images/SignUpImg.png" alt="" className="opacity-50 min-h-screen min-w-full" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
                    <h1 className="text-9xl font-bold text-white">JOIN US</h1>
                    <span className="bg-mealshub-blue text-white font-nunito font-bold text-lg my-16 px-24 py-2">
                        Discover a new way to dine!
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col bg-mealshub-cream ">
                <SignUpCardTenant />
            </div>
        </div>
    )
}