import React from "react";
import { InputContainer } from "./InputContainer";
import { iconName } from "@fortawesome/free-solid-svg-icons/fa8";

interface InputProps {
    label: string;
    type: string;
    defaultValue?: string;
    onChange?: (e: any) => void;
    // onBlur?: () => void;
    // name: string;
    name: string;
    error: any;
}

function Input(
    { label, type, defaultValue, onChange, name, error }: InputProps,
    ref: any,
) {
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
        <InputContainer label={label}>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                defaultValue={defaultValue}
                type={type}
                placeholder={label}
                ref={ref}
                name={name}
                onChange={onChange}
            />
            {error && (
                <div className="flex justify-center items-center absolute top-0 right-4 h-full w-48 text-red-500 text-center text-sm">
                    {getErrorMessages()}
                </div>
            )}
        </InputContainer>
    );
}

export default React.forwardRef(Input);
