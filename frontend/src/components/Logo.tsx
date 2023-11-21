import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"}>
            <img src = "../../public/images/MealsHub.png" alt = "MealsHub" className="flex object-cover h-full w-full" />
        </Link>
    );
}
