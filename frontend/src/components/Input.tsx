import React from "react";
import { InputContainer } from "./InputContainer";

interface InputProps {
    label: string;
    type: string;
    defaultValue: any;
    // onChange: () => void;
    // onBlur: () => void;
    name: string;
    error: any;
}

function Input(
    {
        label,
        type,
        defaultValue,
        /* onChange, onBlur, */ name,
        error,
    }: InputProps,
    ref: any,
) {
    const getErrorMessages = () => {
        if (!error) return;
        if (error.message) return error.message;
        // default
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
        <InputContainer label={label} bgColor="white">
            <input
                className="w-full h-full transition border-none hover:border-2 duration-150 ease-out bg-white text-base outline-none"
                type={type}
                defaultValue={defaultValue}
                // onChange={onChange}
                // onBlur={onBlur}
                name={name}
                ref={ref}
                placeholder={label}
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
