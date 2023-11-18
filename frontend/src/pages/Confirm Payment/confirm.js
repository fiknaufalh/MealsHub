import React from "react";
import ReactDOM from "react-dom";

const Confirm = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;