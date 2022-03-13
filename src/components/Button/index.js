import React from 'react';
import './Button.scss';

export const PrimaryButton = ({ text, onClick }) => {
    return (
        <button className="primary" onClick={onClick}>{text}</button>
    )
}

export const SecondaryButton = ({ text, onClick }) => {
    return (
        <button className="secondary" onClick={onClick}>{text}</button>
    )
}