import { connect } from "react-redux";
import {
    userFollow, userUnFollow, setUserPage,
    getUsersThunkActionCreator, followThunkAC, unFollowThunkAC
} from "../../Redux/find_users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkActionCreator(this.props.userPage, this.props.usersInOnePage)
    };

    onPageChanged = (changedPage) => {
        if (changedPage !== this.props.userPage) {
            this.props.setUserPage(changedPage);
            this.props.getUsersThunkActionCreator(changedPage, this.props.usersInOnePage);
        }
    };

    render() {
        return <>
            {this.props.isFetched === true
                ? <Preloader />
                : <Users users={this.props.users}
                    usersTotalCount={this.props.usersTotalCount}
                    usersInOnePage={this.props.usersInOnePage}
                    userPage={this.props.userPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.followThunkAC}
                    unFollow={this.props.unFollowThunkAC}
                    isFollowingFetched={this.props.isFollowingFetched}
                />}
        </>
    };
}

let mapPropsToState = (state) => {
    return {
        users: state.findUsersPage.users,
        userPage: state.findUsersPage.userPageNumber,
        usersInOnePage: state.findUsersPage.usersInOnePage,
        usersTotalCount: state.findUsersPage.usersTotalCount,
        isFetched: state.findUsersPage.isFetched,
        isFollowingFetched: state.findUsersPage.isFollowingFetched
    }
};

const Find_Users_Container = connect(mapPropsToState, {
    userFollow, userUnFollow, setUserPage,
    getUsersThunkActionCreator, followThunkAC, unFollowThunkAC
})(UsersContainer)



export default Find_Users_Container