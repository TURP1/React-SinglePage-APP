import React from 'react'
import PostContainer from './Posts/MyPosts_Container';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props) => {
    
    return (
        <div className={obj.content}>
            <ProfileInfo currentProfileInfo={props.currentProfileInfo}
                status={props.status}
                changeStatus={props.changeStatus}
                changePicture={props.changePicture} />
            <PostContainer postsData={props.postsData}
                addNewPost={props.addNewPost}
                postImageData={props.postImageData}
            />
        </div>
    );
};
export default Profile;