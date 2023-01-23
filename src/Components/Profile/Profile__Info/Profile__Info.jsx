import React from 'react'
import obj from './Profile__Info.module.css'
import defaultAva from '../../../assets/images/default_photo.jpg'

const ProfileInfo = (props) => {



  return (
    <div className={obj.profile__info_container}>
      <div className={obj.profile__info_avatar}>
        <img alt="avatar" src={props.currentProfileInfo.photos.large
          ? props.currentProfileInfo.photos.large
          : defaultAva} />
      </div>
      <div className={obj.profile__info_details_container}>
        <div className={obj.profile__info_details_container_row}>
          <div className={obj.profile__info_details_name}>{props.currentProfileInfo.fullName}</div>
          <div>{props.currentProfileInfo.lookingForAJob ? `looking for a job` : `not looking`}</div>
        </div>
        <div className={obj.profile__info_details_container_row}>
          <div>{props.currentProfileInfo.aboutMe}</div>
          <div>{props.currentProfileInfo.lookingForAJobDescription}</div>
        </div>
        <div className={obj.profile__info_details_social}>social</div>
      </div>

    </div>
  );
};
export default ProfileInfo;