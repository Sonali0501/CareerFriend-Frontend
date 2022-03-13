import React from 'react';
import Skill from './Skills';

const RightSection = ({userProfile}) => {

    console.log('UserProfile', userProfile)
    return (
        <div>
            {userProfile?.skills.length ? 
                <div className="skill-container">
                    <h2>Skills</h2>
                    {userProfile?.skills.map(( i, index )=> {
                        return <Skill key={index} name={i.name} level={i.level} />
                    })}
                </div>
            : null}
        </div>
    )
}

export default RightSection;