import React from 'react'
import MyPosts from './Posts/MyPosts';
import obj from './Profile.module.css'
import ProfileInfo from './Profile__Info/Profile__Info';

const Profile = (props) => {

    return (
        <div className={obj.content}>
            <ProfileInfo contentBackgroundsData={props.profileInfoContentBackgroundsData} />
            <MyPosts
                myPostsPageMethods={props.myPostsPageMethods}
                myPostsPageData={props.myPostsPageData} />
        </div>
    );
};
export default Profile;