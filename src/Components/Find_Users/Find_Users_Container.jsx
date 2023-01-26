
import { connect } from "react-redux";
import { userFollow, userUnFollow, setUsers, setUserPage, setTotalCount, setFetch } from "../../Redux/find_users_reducer";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.userPage}&count=${this.props.usersInOnePage}`,
            { withCredentials: true })
            .then(response => {
                this.props.setFetch(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (changedPage) => {
        if (changedPage !== this.props.userPage) {
            this.props.setUserPage(changedPage);
            this.props.setFetch(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${changedPage}&count=${this.props.usersInOnePage}`,
                { withCredentials: true })
                .then(response => {
                    this.props.setFetch(false);
                    this.props.setUsers(response.data.items);
                })
        }
    };

    follow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '1fb709b9-92aa-4a14-b32f-e0c92ad59e35'
                }
            })
            .then(this.props.userFollow(id));
    };



    unFollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '1fb709b9-92aa-4a14-b32f-e0c92ad59e35'
                }
            })
            .then(this.props.userUnFollow(id));
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
                />}
        </>



    }
}

let mapPropsToState = (state) => {
    return {
        users: state.findUsersPage.users,
        userPage: state.findUsersPage.userPageNumber,
        usersInOnePage: state.findUsersPage.usersInOnePage,
        usersTotalCount: state.findUsersPage.usersTotalCount,
        isFetched: state.findUsersPage.isFetched
    }
};
// OLD DISPATCH
// let mapDispatchToState = (dispatch) => {
//     return {
//         userFollow: (id) => { dispatch(USER_FOLLOW_AC(id)) },
//         userUnFollow: (id) => { dispatch(USER_UNFOLLOW_AC(id)) },
//         setUsers: (users) => { dispatch(SET_USER_AC(users)) },
//         setUserPage: (userPage) => { dispatch(SET_USER_PAGE_AC(userPage)) },
//         setTotalCount: (usersTotalCount) => { dispatch(SET_TOTAL_COUNT_AC(usersTotalCount)) },
//         setFetch: (isFetched) => { dispatch(SET_FETCHING_AC(isFetched)) },


//     }
// }

const Find_Users_Container = connect(mapPropsToState, {
    userFollow,
    userUnFollow,
    setUsers,
    setUserPage,
    setTotalCount,
    setFetch,
})(UsersContainer)



export default Find_Users_Container