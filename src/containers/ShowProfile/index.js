import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ShowProfile.scss';
import BasicInfo from '../../components/Profile/BasicInfo';
import RightSection from '../../components/Profile/RightSection';


const ShowProfile = ({ user }) => {

  const navigate = useNavigate()
    useEffect(() => {
        if(user?.token) {
            navigate('/profile')
        } else {
            navigate('/')
        }
    },[user])
  
  return (
    <div className="profile-container">
      <BasicInfo user={user} />
      <RightSection userProfile={user} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(ShowProfile);