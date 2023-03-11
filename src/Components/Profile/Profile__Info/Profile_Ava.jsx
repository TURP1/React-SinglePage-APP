import { useState, useEffect } from 'react';
import defaultAva from '../../../assets/images/default_photo.jpg';
import obj from './Profile__Info.module.css';

const ProfileAva = (props) => {

    let [avatar, setAvatar] = useState(props.currentProfileInfo.photos.large);

    function onchangeHandler(e) {
        let file = e.target.files[0];
        if (file) {
            props.changePicture(file).then((response) => {
                if (response && response.resultCode === 0) {
                    setAvatar(URL.createObjectURL(file));
                }
            });

        }
    }

    useEffect(() => {
        setAvatar(props.currentProfileInfo.photos.large)
    }, [props.currentProfileInfo.photos.large]);

    return <div className={obj.profile__info_avatar}>
        <img alt="avatar" src={avatar ? avatar : defaultAva} />
        {props.isOwner && <input type="file" onChange={onchangeHandler} />}
    </div>
}

export default ProfileAva;