import React from "react";
import PropTypes from "prop-types";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FeatureCard({ iconClass, title, description, circleAvatarBgColor }) {
    return (
        <div className="flex flex-col items-center text-center space-y-1 mb-5">
            {/* Icon container */}
            <div
                className={`
                    w-16 h-16 flex items-center justify-center rounded-full 
                    transition-all duration-500 ease-in-out
                    hover:shadow-lg 
                    hover:scale-105
                    relative 
                    border-transparent
                    hover:border-gray-300
                    hover:border-opacity-100
                    group
                `}
                style={{
                    backgroundColor: circleAvatarBgColor || "#00CFFB",
                    boxShadow: 'none',
                    border: '0px solid transparent',
                    transition: 'all 500ms ease-in-out',
                }}
            >
                {/* Border overlay */}
                <div
                    className="
                        absolute inset-0 rounded-full 
                        border-gray-300 
                        group-hover:border-2
                        transition-all duration-500 ease-in-out
                        opacity-0 
                        group-hover:opacity-100
                        hover:shadow-lg hover:scale-110 hover:border-2
                        hover:border-[#00CFFB]
                    "
                    style={{
                        border: '0px solid transparent',
                        transition: 'all 500ms ease-in-out',
                    }}
                />
                <i className={`text-white text-2xl ${iconClass} z-10`} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 pt-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 max-w-xs">{description}</p>
        </div>
    );
}

// PropTypes validation
FeatureCard.propTypes = {
    iconClass: PropTypes.string.isRequired, // Font Awesome class names
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    circleAvatarBgColor: PropTypes.string
};