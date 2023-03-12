import Status from './Profile__Status_WithHOOK';
import obj from './Profile__Info.module.css';

const ProfileDetails = (props) => {

    return   <div className={obj.profile__info_details_container}>
    <div className={obj.profile__info_details_container_row}>
      <div className={obj.profile__info_details_name}>{props.currentProfileInfo.fullName}</div>
      <div>{props.currentProfileInfo.lookingForAJob ? `looking for a job` : `not looking for a job`}</div>
    </div>
    <Status
      status={props.status}
      changeStatus={props.changeStatus}
    ></Status>
    <div className={obj.profile__info_details_container_row}>
      <div>{`About Me: `}{props.currentProfileInfo.aboutMe}</div>
      <div>{`Skills Description: `}{props.currentProfileInfo.lookingForAJobDescription}</div>
    </div>
    <div className={obj.profile__info_details_social}>social</div>
  </div>
}

export default ProfileDetails

