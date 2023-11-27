import React from 'react';

interface AddButtonProps {
    onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = (props) => {
    return (
        <button
            type="button"
            className="w-40 h-10 mx-2 my-4 text-white bg-mealshub-red hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-full text-md font-nunito"
            onClick={props.onClick}
        >
            Add Menu
        </button>
    );
};

export default AddButton;
