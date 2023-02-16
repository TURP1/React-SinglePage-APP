import { connect } from "react-redux";
import {
    userFollow, userUnFollow, setUserPage,
    getUsersThunkActionCreator, followThunkAC, unFollowThunkAC
} from "../../Redux/find_users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getIsFetched, getIsFollowingFetched, getUserPage, getUsersFilter, getUsersInOnePage, getUsersTotalCount } from "../../Redux/users_selectors";



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
        users: getUsersFilter(state),
        userPage: getUserPage(state),
        usersInOnePage: getUsersInOnePage(state),
        usersTotalCount: getUsersTotalCount(state),
        isFetched: getIsFetched(state),
        isFollowingFetched: getIsFollowingFetched(state)
    }
};

const Find_Users_Container = connect(mapPropsToState, {
    userFollow, userUnFollow, setUserPage,
    getUsersThunkActionCreator, followThunkAC, unFollowThunkAC
})(UsersContainer)



export default Find_Users_Container