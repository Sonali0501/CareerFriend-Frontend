import React from 'react';
import './Skills.scss';

const Skill = ({name, level}) => {
    return (
        <div className="skill">
            <p className="name">{name}</p>
            <p className="level">{level}</p>
        </div>
    )
}

export default Skill;