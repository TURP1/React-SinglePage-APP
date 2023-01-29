
import { connect } from "react-redux";
import { userFollow, userUnFollow, setUsers, setUserPage, setTotalCount, setFetch, setFollowingFetch } from "../../Redux/find_users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import usersAPI from "../../API/api";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetch(true);
        usersAPI.getUsers(this.props.userPage, this.props.usersInOnePage)
            .then(data => {
                this.props.setFetch(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    };

    onPageChanged = (changedPage) => {
        if (changedPage !== this.props.userPage) {
            this.props.setUserPage(changedPage);
            this.props.setFetch(true);
            usersAPI.getUsers(changedPage, this.props.usersInOnePage)
                .then(data => {
                    this.props.setFetch(false);
                    this.props.setUsers(data.items);
                })
        }
    };

    follow = (id) => {
        this.props.setFollowingFetch(true, id)
        usersAPI.follow(id)
            .then(() => {
                this.props.userFollow(id);
                this.props.setFollowingFetch(false, id)
            }
            )

    };

    unFollow = (id) => {

        this.props.setFollowingFetch(true, id)
        usersAPI.unFollow(id)
            .then(() => {
                this.props.userUnFollow(id)
                this.props.setFollowingFetch(false, id)
            }
            )
    };

    render() {
        return <>
            {this.props.isFetched === true
                ? <Preloader />
                : <Users users={this.props.users}
                    userUnFollow={this.props.userUnFollow}
                    userFollow={this.props.userFollow}
                    usersTotalCount={this.props.usersTotalCount}
                    usersInOnePage={this.props.usersInOnePage}
                    userPage={this.props.userPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.follow}
                    unFollow={this.unFollow}
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
    userFollow,
    userUnFollow,
    setUsers,
    setUserPage,
    setTotalCount,
    setFetch,
    setFollowingFetch
})(UsersContainer)



export default Find_Users_Container