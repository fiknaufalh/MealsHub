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
    return (
        <InputContainer label={label} error={error}>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                defaultValue={defaultValue}
                type={type}
                placeholder={label}
                ref={ref}
                name={name}
                onChange={onChange}
            />
        </InputContainer>
    );
}

export default React.forwardRef(Input);
