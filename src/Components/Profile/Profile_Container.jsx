import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthNavigate from '../../HOC/withAuthNavigateHOC';
import withRouter from '../../HOC/withRouterHOC';
import {  addNewPost, getUser, getStatus, changeStatus } from '../../Redux/profile_reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.UserId;
        this.props.getUser(userId);
        this.props.getStatus(userId);



    }
    render() {

        return <Profile
            postsData={this.props.postsData}
            postImageData={this.props.postImageData}
            currentProfileInfo={this.props.currentProfileInfo}
            updatePostText={this.props.updatePostText}
            addNewPost={this.props.addNewPost}
            status={this.props.status}
            changeStatus={this.props.changeStatus}

        />
    }

};

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        postImageData: state.profilePage.postImagesData,
        currentProfileInfo: state.profilePage.currentProfileInfo,
        authMe: state.authReducer.authorized,
        status: state.profilePage.currentProfileStatus,
    }

};


export default compose(
    connect(mapStateToProps, { addNewPost, getUser, getStatus, changeStatus }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
