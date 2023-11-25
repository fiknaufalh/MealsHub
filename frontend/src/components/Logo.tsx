import { Link } from "react-router-dom";

interface LogoProps {
    height?: string;
    width?: string;
}

export default function Logo(props: LogoProps) {
    const { height, width } = props;

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
