import defaultAva from '../../../assets/images/default_photo.jpg';
import obj from './Profile__Info.module.css';

const ProfileAva = (props) => {

    function onchangeHandler(e) {
        let file = e.target.files[0];
        if(file){
            props.changePicture(file)
        } 
    }

    return  <div className={obj.profile__info_avatar}>
    <img alt="avatar" src={props.currentProfileInfo.photos.large
      ? props.currentProfileInfo.photos.large
      : defaultAva} />
      <input type="file" onChange={onchangeHandler} />
  </div>
}

export default ProfileAva;