import React from 'react'
import obj from './Profile__Info.module.css'

import Status from './Profile__Status_WithHOOK';
import ProfileAva from './Profile_Ava';


const ProfileInfo = ({ currentProfileInfo, changePicture, ...props }) => {



  return (
    <div className={obj.profile__info_container}>
      <ProfileAva currentProfileInfo={currentProfileInfo} changePicture={changePicture} />
      <div className={obj.profile__info_details_container}>
        <div className={obj.profile__info_details_container_row}>
          <div className={obj.profile__info_details_name}>{currentProfileInfo.fullName}</div>
          <div>{currentProfileInfo.lookingForAJob ? `looking for a job` : `not looking`}</div>
        </div>
        <Status
          status={props.status}
          changeStatus={props.changeStatus}
        ></Status>
        <div className={obj.profile__info_details_container_row}>
          <div>{currentProfileInfo.aboutMe}</div>
          <div>{currentProfileInfo.lookingForAJobDescription}</div>
        </div>
        <div className={obj.profile__info_details_social}>social</div>
      </div>

    </div>
  );
};
export default ProfileInfo;