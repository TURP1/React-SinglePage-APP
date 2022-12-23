import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props)=>{
    
    return(
        <div className={obj.content}>
       <ProfileInfo ContentBackgroundsData={props.state.ContentBackgroundsData}/>
        <MyPosts PostsData={props.state.PostsData} PostImagesData={props.state.PostImagesData} />
        </div>
    );
};
export default Profile;