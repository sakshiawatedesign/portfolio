// components/Spacer.jsx

import React from 'react';
import PropTypes from 'prop-types';

export default function Spacer({ height, className = '' }) {
    return (
        <div
            className={`${className}`}
            style={{ height }}
        />
    );
}

Spacer.propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string, // Tailwind CSS responsive classes
};
