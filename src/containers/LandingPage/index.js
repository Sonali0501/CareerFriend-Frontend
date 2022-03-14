import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Login from '../../components/Login';
import './LandingPage.scss';

const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const LandingPage = ({ user }) => {

    const navigate = useNavigate()
    useEffect(() => {
        if(user?.token) {
            navigate('/profile')
        } else {
            navigate('/')
        }
    },[user])

    return  (
        <div className="container">
            <Card title="For Mentors" desc={desc} />
            <Login />
            <Card title="For Mentees" desc={desc} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(LandingPage);
