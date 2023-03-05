import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthNavigate from '../../HOC/withAuthNavigateHOC';
import withRouter from '../../HOC/withRouterHOC';
import { addNewPost, getUser, getStatus, changeStatus, changePicture } from '../../Redux/profile_reducer';

import Profile from './Profile';


const ProfileContainer = (props) => {
    let { getUser, getStatus, authorizedId } = props;
    let userId = props.router.params.UserId;
    debugger
    let isOwner = (userId == authorizedId)
    if (!userId) {
        userId = authorizedId
    };

    useEffect(() => {
        getUser(userId);
        getStatus(userId);
    }, [userId, getUser, getStatus])


    return <Profile
        postsData={props.postsData}
        postImageData={props.postImageData}
        currentProfileInfo={props.currentProfileInfo}
        updatePostText={props.updatePostText}
        addNewPost={props.addNewPost}
        status={props.status}
        changeStatus={props.changeStatus}
        changePicture={props.changePicture}
        isOwner={isOwner}

    />

};

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        postImageData: state.profilePage.postImagesData,
        currentProfileInfo: state.profilePage.currentProfileInfo,
        authMe: state.authReducer.isAuth,
        status: state.profilePage.currentProfileStatus,
        authorizedId: state.authReducer.id
    }

};


export default compose(
    connect(mapStateToProps, { addNewPost, getUser, getStatus, changeStatus, changePicture }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
