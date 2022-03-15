import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import SignupForm from '../../components/Signup';
import './Signup.scss';

const Signup = ({user}) => {

    const location = useLocation()
    const param = location.search?.split('=')[1]

    const navigate = useNavigate()

    useEffect(() => {
        if(user?.token) {
            navigate('/profile')
        }
    },[user])

    
    return (
        <div className="signup">
            <p className="heading">Join as <span className="type">{param?.toUpperCase()}</span></p>
            <SignupForm type={param} err={user?.error ? user?.message : null} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Signup);