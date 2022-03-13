import React, {useState, useEffect} from 'react';
import './ShowProfile.scss';
import BasicInfo from '../../components/Profile/BasicInfo';
import RightSection from '../../components/Profile/RightSection';
import axios from 'axios';

const ShowProfile = () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJuYW1lIjoidGVzdHVzZXIiLCJ0eXBlIjoibWVudGVlIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjQ3MTEyODUwfQ.aVQAFDA0LlLsr7Le9rXWR-lDLx5SVjpWCrJeZXg6sKc';
  const [userProfile, setUserProfile] = useState()

  useEffect(() => {
    axios.get('http://localhost:9000/profile/get_profile', {
      headers: {
        'authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).then(res => {
      if(!res.error) {
        setUserProfile(res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <div className="profile-container">
      <BasicInfo user={userProfile?.data} />
      <RightSection userProfile={userProfile?.data} />
    </div>
  );
}

export default ShowProfile;