import React from "react";

interface InputContainerProps {
    label: string;
    children: React.ReactNode;
    error: any;
}

export const InputContainer: React.FC<InputContainerProps> = ({
    label,
    children,
    error,
}) => {
    const getErrorMessages = () => {
        console.log(error);
        if (!error) return;
        if (error.message) return error.message;
        // default
        console.log(error);
        switch (error.type) {
            case "required":
                return "This field is required";
            case "minLength":
                return `This field must be at least ${error.types.minLength} characters long`;
            case "maxLength":
                return `This field must be at most ${error.types.maxLength} characters long`;
            default:
                return "Invalid input";
        }
    };
    return (
        <div>
            <div className="flex justify-between">
                <label className="block mb-2 text-md font-medium text-mealshub-blue">
                    {label}
                </label>
                {error && (
                    <div className="flex justify-center items-center top-0 right-4 w-48 text-red-500 text-center text-sm">
                        {getErrorMessages()}
                    </div>
                )}
            </div>
            <div className="px-2 h-10 flex items-center">{children}</div>
        </div>
    );
};
