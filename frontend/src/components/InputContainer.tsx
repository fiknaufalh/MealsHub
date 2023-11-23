import React from "react";

interface InputContainerProps {
    label: string;
    bgColor: string;
    children: React.ReactNode;
}

export const InputContainer: React.FC<InputContainerProps> = ({
    label,
    bgColor,
    children,
}) => {
    return (
        <div
            className="relative mb-1/2 rounded-2xl pt-1/3 border border-gray-300"
            style={{ backgroundColor: bgColor }}
        >
            <label className="inline-block ml-2 text-gray-600 text-base">
                {label}
            </label>
            <div className="px-2 h-10 flex items-center">{children}</div>
        </div>
    );
};
