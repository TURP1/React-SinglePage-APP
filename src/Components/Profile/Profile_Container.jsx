import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthNavigate from '../../HOC/withAuthNavigateHOC';
import withRouter from '../../HOC/withRouterHOC';
import { updatePostText, newPost, getUserThunkAC } from '../../Redux/profile_reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.UserId;
            this.props.getUserThunkAC(userId);
    }
    render() {
        return <Profile
            postsData={this.props.postsData}
            newValue={this.props.newValue}
            postImageData={this.props.postImageData}
            currentProfileInfo={this.props.currentProfileInfo}
            updatePostText={this.props.updatePostText}
            newPost={this.props.newPost}
        />
    }

};

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        newValue: state.profilePage.postNewValue,
        postImageData: state.profilePage.postImagesData,
        currentProfileInfo: state.profilePage.currentProfileInfo,
        authMe: state.authReducer.authorized
    }

};


export default compose (
    connect(mapStateToProps, { updatePostText, newPost, getUserThunkAC }),
    withRouter,
    withAuthNavigate
) (ProfileContainer)
