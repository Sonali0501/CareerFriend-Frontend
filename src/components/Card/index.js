import React from 'react';
import { PrimaryButton, SecondaryButton } from '../Button';
import './Card.scss';

const Card = ({title, desc}) => {
    return (
        <div className="card">
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <div className="actions">
                <PrimaryButton text="Login" />
                <SecondaryButton text="Signup" />
            </div>
        </div>
    )
}

export default Card;