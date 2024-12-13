import React from 'react';
import themeColors from "../../../lib/theme-colors";


const OutLinedBtn = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 border-2 text-bold rounded-md bg-white transition duration-300 hover:bg-[#dfeded]"
            style={{
                fontWeight: "700",
                color: themeColors.primaryText,
                borderColor: themeColors.primaryText,
            }}
        >
            {text}
        </button>
    );
};

export default OutLinedBtn;