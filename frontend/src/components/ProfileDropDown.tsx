import { Link } from "react-router-dom";

export default function ProfileDropDown(props: any) {
    return (
        <div
            id="userDropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow gl-new-dropdown-inner"
        >
            <div className="px-4 py-3 text-sm text-gray-900">
                <div>{props.name}</div>
                <div className="font-medium text-s truncate">{props.email}</div>
            </div>
            <div className="py-1">
                <a
                    href="/role"
                    onClick={props.onClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Sign out
                </a>
            </div>
        </div>
    );
}
