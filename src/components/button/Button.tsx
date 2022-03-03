import React from "react";
import './Button.css';

interface Props {
    label: string;
}

function Button ({label}: Props) {
    return (
        <button className="button-container">{label}</button>
    )
}

export default Button;