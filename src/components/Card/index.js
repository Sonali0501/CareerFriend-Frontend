import React from 'react';
import { SecondaryButton } from '../Button';
import './Card.scss';

const Card = ({title, desc}) => {
    return (
        <div className="card" >
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <SecondaryButton text="Signup" />
        </div>
    )
}

export default Card;