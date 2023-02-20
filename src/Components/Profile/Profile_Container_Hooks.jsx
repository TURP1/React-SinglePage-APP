import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthNavigate from '../../HOC/withAuthNavigateHOC';
import withRouter from '../../HOC/withRouterHOC';
import {  addNewPost, getUser, getStatus, changeStatus } from '../../Redux/profile_reducer';
import Profile from './Profile';


const ProfileContainer = (props)=> {
    let userId = props.router.params.UserId;
    if (!userId){
        userId = props.authorizedId
    };
    const getUserFunc = props.getUser;
    const getStatusFunc = props.getStatus;

    useEffect(()=>{
        getUserFunc(userId);
        getStatusFunc(userId);
    },[userId, getUserFunc, getStatusFunc])


        return <Profile
            postsData={props.postsData}
            postImageData={props.postImageData}
            currentProfileInfo={props.currentProfileInfo}
            updatePostText={props.updatePostText}
            addNewPost={props.addNewPost}
            status={props.status}
            changeStatus={props.changeStatus}

        />

};

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        postImageData: state.profilePage.postImagesData,
        currentProfileInfo: state.profilePage.currentProfileInfo,
        authMe: state.authReducer.isAuth,
        status: state.profilePage.currentProfileStatus,
        authorizedId : state.authReducer.id
    }

};


export default compose(
    connect(mapStateToProps, { addNewPost, getUser, getStatus, changeStatus }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
