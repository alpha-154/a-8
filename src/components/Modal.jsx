// src/components/Modal.jsx
import React from "react";
import successImg from "../assets/Group.png";

const Modal = ({ onClose, totalCost }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 text-center max-w-xs w-full">
        <div className="text-green-500 text-3xl mb-4 flex justify-center items-center">
          <img src={successImg} alt="successImg" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successfull!</h2>
        <p className="text-gray-700 mb-4">Thanks for purchasing.</p>
        <p className="text-lg font-semibold">Total: ${totalCost.toFixed(2)}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
