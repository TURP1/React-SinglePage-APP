import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = ()=>{
    return(
        <div className={obj.content}>
       <ProfileInfo/>
        <MyPosts/>
        </div>
    );
};
export default Profile;