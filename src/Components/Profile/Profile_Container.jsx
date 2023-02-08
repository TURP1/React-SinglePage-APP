import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthNavigate from '../../HOC/withAuthNavigateHOC';
import withRouter from '../../HOC/withRouterHOC';
import { updatePostText, newPost, getUser, getStatus, changeStatus } from '../../Redux/profile_reducer';
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
            newValue={this.props.newValue}
            postImageData={this.props.postImageData}
            currentProfileInfo={this.props.currentProfileInfo}
            updatePostText={this.props.updatePostText}
            newPost={this.props.newPost}
            status={this.props.status}
            changeStatus={this.props.changeStatus}

        />
    }

};

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        newValue: state.profilePage.postNewValue,
        postImageData: state.profilePage.postImagesData,
        currentProfileInfo: state.profilePage.currentProfileInfo,
        authMe: state.authReducer.authorized,
        status: state.profilePage.currentProfileStatus,
    }

};


export default compose(
    connect(mapStateToProps, { updatePostText, newPost, getUser, getStatus, changeStatus }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
