import React from "react";
import './Button.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

interface Props {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    ghost?: boolean;
    label: string;
}

function Button ({ label, primary, secondary, tertiary, ghost }: Props) {
    if (tertiary) {
        return <button>tertiary</button>
        
    } else if (secondary) {
        if (ghost) {
            return <button className="secondary-button secondary-ghost-button">{label}</button>
        } else {
            return <button className="secondary-button">{label}</button>
        } 
        
    } else {
        if (ghost) {
            return <button className="primary-button primary-ghost-button">{label}</button>
        } else {
            return <button className="primary-button">
                <PlayArrowIcon className="play"/>{label}</button>
        }   
    }
}

export default Button;