import RoleCard from "../components/RoleCard"

export default function ChooseRolePage() {
    return (
        <div className="grid grid-cols-3 min-h-screen">
            <div className="col-span-1 flex items-center justify-center bg-mealshub-cream">
                <RoleCard />
            </div>
            <div className="col-span-2 relative">
                <img src="../../public/images/WelcomingPage(Role).png" alt="" className="absolute opacity-50 h-screen min-w-full" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
                    <h1 className="text-9xl font-bold text-white">WELCOME</h1>
                    <span className="bg-mealshub-blue text-white font-nunito font-bold text-lg mt-12 px-24 py-2 flex items-center justify-center">
                        MealsHub, your gateway to a centralized dining experience
                    </span>
                    <img src="../../public/images/MealsHub.png" alt="" className="object-cover h-80 w-80" />
                </div>
            </div>
        </div>
    )
}

