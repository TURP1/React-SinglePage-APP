import React from 'react';
import { NEW_POST_ACTION_CREATOR, UPDATE_POST_TEXT_ACTION_CREATOR } from '../../../Redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let profilePage = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(NEW_POST_ACTION_CREATOR());
    };

    const updatePostText = (text) => {
        props.store.dispatch(UPDATE_POST_TEXT_ACTION_CREATOR(text));
    };

    return (
        <MyPosts updatePostText={updatePostText}
            newPost={addPost}
            postsData={profilePage.postsData}
            newValue={profilePage.newValue}
            postImageData={profilePage.postImagesData} />
    );
};
export default MyPostsContainer;

