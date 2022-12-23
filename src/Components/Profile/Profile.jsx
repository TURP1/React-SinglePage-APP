import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props)=>{
    const PostsData = props.profileDataArray[0];
    const ContentBackgroundsData = props.profileDataArray[1];
    const PostImagesData = props.profileDataArray[2];

    return(
        <div className={obj.content}>
       <ProfileInfo ContentBackgroundsData={ContentBackgroundsData}/>
        <MyPosts PostsData={PostsData} PostImagesData={PostImagesData} />
        </div>
    );
};
export default Profile;