import React from 'react'
import { NEW_POST_ACTION_CREATOR, UPDATE_POST_TEXT_ACTION_CREATOR } from '../../Redux/profile_reducer';
import Profile from './Profile';

const ProfileContainer = (props) => {

    let profilePage = props.store.getState().profilePage;

    const newPost = () => {
        props.store.dispatch(NEW_POST_ACTION_CREATOR());
    };

    const updatePostText = (text) => {
        props.store.dispatch(UPDATE_POST_TEXT_ACTION_CREATOR(text));
    };

    let profilePageMethods = {
        updatePostText,
        newPost,
    };

    const profilePageData = {
        postsData: profilePage.postsData,
        newValue: profilePage.newValue,
        postImageData: profilePage.postImagesData
    };


    return (
        <Profile myPostsPageData={profilePageData}
            myPostsPageMethods={profilePageMethods}
            profileInfoContentBackgroundsData={profilePage.contentBackgroundsData} />
    );
};
export default ProfileContainer;