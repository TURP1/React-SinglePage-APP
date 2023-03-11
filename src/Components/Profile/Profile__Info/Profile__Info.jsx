import React, { useState } from 'react'
import obj from './Profile__Info.module.css'


import ProfileAva from './Profile_Ava';
import ProfileDetails from './Profile_Details';
import { ProfileDetailsForm } from './Profile_Details_Form';


const ProfileInfo = ({ currentProfileInfo, changePicture, ...props }) => {

  let [editMode, setEditMode] = useState(false)

  return (
    <div className={obj.profile__info_container}>
      <ProfileAva currentProfileInfo={currentProfileInfo} changePicture={changePicture} isOwner={props.isOwner} />
      {!editMode
        ? <>
          <ProfileDetails currentProfileInfo={currentProfileInfo} {...props} />
          <button onClick={() => { setEditMode(true) }}>Change Profile</button>
        </>
        : <ProfileDetailsForm setEditMode={setEditMode} currentProfileInfo={currentProfileInfo} 
        changeProfileInfo={props.changeProfileInfo} />
      }

    </div>
  );
};
export default ProfileInfo;