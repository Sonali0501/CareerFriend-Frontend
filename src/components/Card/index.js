import React from 'react';
import { SecondaryButton } from '../Button';
import './Card.scss';

const Card = ({title, desc, onClick}) => {
    return (
        <div className="card" >
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <SecondaryButton text="Signup" onClick={onClick} />
        </div>
    )
}

export default Card;