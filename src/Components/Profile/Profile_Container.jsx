import React from 'react'
import { connect } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { updatePostText, newPost, getUserThunkAC } from '../../Redux/profile_reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.UserId;
        this.props.getUserThunkAC(userId);
    }
    render() {
        if(!this.props.authMe){
           return <Navigate to='/login' />
        }
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
        authMe: state.authReducer.authorized
    }

};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

let ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, { updatePostText, newPost, getUserThunkAC })(ProfileContainerWithUrl)