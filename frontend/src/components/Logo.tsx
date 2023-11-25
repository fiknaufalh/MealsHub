<<<<<<< 0108aaa7aa2a7e320b6a317ced078eb5224515ee
export default function Logo() {
=======
import { Link } from "react-router-dom";

interface LogoProps {
    height?: string;
    width?: string;
}

export default function Logo(props: LogoProps) {
    const { height, width } = props;

>>>>>>> 14bfb43d930dd2fb8a031495c0343c14f4e6a46e
    return (
        <Link to={"/"}>
            <img
                src="../../public/images/MealsHub.png"
                alt="MealsHub"
                className={`flex object-contain 
                    ${height ? `h-${height}` : ""} 
                    ${width ? `w-${width}` : ""}`}
            />
        </Link>
    );
}
