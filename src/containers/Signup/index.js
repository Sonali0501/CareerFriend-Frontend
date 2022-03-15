import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SignupForm from '../../components/Signup';
import './Signup.scss';

const Signup = () => {

    const location = useLocation()
    const param = location.search?.split('=')[1]
    
    return (
        <div className="signup">
            <p className="heading">Join as <span className="type">{param.toUpperCase()}</span></p>
            <SignupForm type={param} />
        </div>
    )
}

export default connect()(Signup);