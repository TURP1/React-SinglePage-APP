import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props) => {
    return (
        <div className={obj.content}>
            <ProfileInfo contentBackgroundsData={props.profilePage.contentBackgroundsData} />
            <MyPosts
                profilePage={props.profilePage}
                action={props.action} />
        </div>
    );
};
export default Profile;