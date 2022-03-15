import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../../actionCreators';
import './ShowProfile.scss';
import BasicInfo from '../../components/Profile/BasicInfo';
import RightSection from '../../components/Profile/RightSection';


const ShowProfile = ({ user, profile, fetchProfile }) => {

  const navigate = useNavigate()
  
  useEffect(() => {
    if(user && user.token) {
      fetchProfile(user.token)
    } else {
      navigate('/')
    }
  },[user])
  
  return (
    <div className="profile-container">
      <BasicInfo user={profile} />
      <RightSection userProfile={profile} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { profile: state.profile, user: state.user }
}

export default connect(mapStateToProps, { fetchProfile })(ShowProfile);