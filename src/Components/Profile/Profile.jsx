import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props)=>{
    return(
        <div className={obj.content}>
       <ProfileInfo ContentBackgroundsData={props.ProfilePage.ContentBackgroundsData}/>
        <MyPosts
         ProfilePage={props.ProfilePage}
         newPost={props.newPost}
         updatePostText={props.updatePostText} />
        </div>
    );
};
export default Profile;