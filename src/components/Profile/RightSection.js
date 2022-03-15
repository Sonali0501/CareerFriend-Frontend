import React from 'react';
import Skill from './Skills';
import './RightSection.scss';

const RightSection = ({userProfile}) => {

    return (
        <div className="sec">
            <div className="skill-container">
                <h2 className="head">Skills</h2>
                {userProfile?.skills?.length ?
                    <div className="list"> 
                    {userProfile?.skills.map(( i, index )=> {
                        return <Skill key={index} name={i.name} level={i.level} />
                    })}
                    </div>: 
                    <p className="nodata">No Skills Added</p>
                }
            </div>

            <div className="lang-container">
                <h2 className="head">Languages</h2>
                {userProfile?.languages?.length ?
                    <div className="list"> 
                    {userProfile?.languages.map(( i, index )=> {
                        return <p key={index} className="lang" >{i}</p>
                    })}
                    </div>: 
                    <p className="nodata">No Languages Added</p>
                }
            </div>

            <div className="edu-container">
                <h2 className="head">Education</h2>
                {userProfile?.education?.length ?
                    <div className="list"> 
                    {userProfile?.education.map((i, index )=> {
                        return <p key={index} className="edu" >{i}</p>
                    })}
                    </div>: 
                    <p className="nodata">No Education Added</p>
                }
            </div>

            <div className="ex-container">
                <h2 className="head">Experience</h2>
                {userProfile?.experience?.length ?
                    <div className="list"> 
                    {userProfile?.experience.map((i, index )=> {
                        return <p key={index} className="edu" >{i}</p>
                    })}
                    </div>: 
                    <p className="nodata">No Experience Added</p>
                }
            </div>

            <div className="interest-container">
                <h2 className="head">Interest</h2>
                {userProfile?.languages?.length ?
                    <div className="list"> 
                    {userProfile?.interests.map(( i, index )=> {
                        return <p key={index} className="lang" >{i}</p>
                    })}
                    </div>: 
                    <p className="nodata">No Interests Added</p>
                }
            </div>
        </div>
    )
}

export default RightSection;