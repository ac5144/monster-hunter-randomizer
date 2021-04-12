import React from 'react';

import './MainButton.css';

export default function MainButton({onClick, buttonText, disabled}) {
    return (
        <button className="MainButton" onClick={onClick} disabled={disabled}>{buttonText}</button>
    );
}