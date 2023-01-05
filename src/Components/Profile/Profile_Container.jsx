import React from 'react'
import { connect } from 'react-redux';
import { NEW_POST_ACTION_CREATOR, UPDATE_POST_TEXT_ACTION_CREATOR } from '../../Redux/profile_reducer';
import Profile from './Profile';

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        newValue: state.profilePage.postNewValue,
        postImageData: state.profilePage.postImagesData,
        profileInfoContentBackgroundsData: state.profilePage.contentBackgroundsData
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(UPDATE_POST_TEXT_ACTION_CREATOR(text));
        },
        newPost: () => {
            dispatch(NEW_POST_ACTION_CREATOR());
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;