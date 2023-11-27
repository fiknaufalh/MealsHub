import React from "react";

interface InputContainerProps {
    label: string;
    children: React.ReactNode;
}

export const InputContainer: React.FC<InputContainerProps> = ({
    label,
    children,
}) => {
    return (
        <div>
            <label className="block mb-2 text-md font-medium text-mealshub-blue">
                {label}
            </label>
            <div className="px-2 h-10 flex items-center">{children}</div>
        </div>
    );
};
