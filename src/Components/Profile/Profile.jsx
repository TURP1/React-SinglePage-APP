import React from 'react'
import MyPosts from './Posts/MyPosts';
import MyPostsContainer from './Posts/MyPosts_Container';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props) => {

    
    return (
        <div className={obj.content}>
            <ProfileInfo contentBackgroundsData={props.state.profilePage.contentBackgroundsData} />
            <MyPostsContainer
                store={props.store} />
        </div>
    );
};
export default Profile;