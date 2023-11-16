import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"}>
            <img src = "../../public/images/MealsHub.png" alt = "MealsHub" width = "340" height = "192" />
        </Link>
    );
}
