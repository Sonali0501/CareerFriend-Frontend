import React from 'react';
import './BasicInfo.scss';

const BasicInfo = ({ user }) => {

    return (
        <div className="basicInfo">
            <div className="profileIcon"></div>
            <div className="info">
                <div>
                <p className="name">{user?.name}</p>
                <p className="type">{user?.type}</p>
                </div>
                <div>
                <p className="values">Email: {user?.email}</p>
                <p className="values">Phone: {user?.phone}</p>
                <p className="values">Location: {user?.location}</p>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo;