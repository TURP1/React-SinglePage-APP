import React from 'react'
import obj from './Profile__Info.module.css'


import ProfileAva from './Profile_Ava';
import ProfileDetails from './Profile_Details';


const ProfileInfo = ({ currentProfileInfo, changePicture, ...props }) => {

  return (
    <div className={obj.profile__info_container}>
      <ProfileAva currentProfileInfo={currentProfileInfo} changePicture={changePicture} isOwner={props.isOwner}/>
      <ProfileDetails currentProfileInfo={currentProfileInfo} {...props}/>
    </div>
  );
};
export default ProfileInfo;