import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { updatePostText, newPost, setCurrentProfileInfo } from '../../Redux/profile_reducer';
import Profile from './Profile';

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentProfile}`)
            .then(response => {
                this.props.setCurrentProfileInfo(response.data);
            })
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

}

let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        newValue: state.profilePage.postNewValue,
        postImageData: state.profilePage.postImagesData,
        currentProfileInfo: state.profilePage.currentProfileInfo,
        currentProfile: state.findUsersPage.currentProfile
    }

};
const ProfileContainer = connect(mapStateToProps, { updatePostText, newPost, setCurrentProfileInfo })(ProfileContainerClass)

export default ProfileContainer;