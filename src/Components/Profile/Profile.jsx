import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props) => {
    return (
        <div className={obj.content}>
            <ProfileInfo currentProfileInfo={props.currentProfileInfo} />
            <MyPosts postsData={props.postsData}
                updatePostText={props.updatePostText}
                newPost={props.newPost}
                newValue={props.newValue}
                postImageData={props.postImageData} />
        </div>
    );
};
export default Profile;