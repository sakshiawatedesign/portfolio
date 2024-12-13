import React from "react";

const GradientBtn = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#319795] to-[#46b97a] transition duration-300 hover:from-[#225756] hover:to-[#225756]"
    >
      {text}
    </button>
  );
};

export default GradientBtn;