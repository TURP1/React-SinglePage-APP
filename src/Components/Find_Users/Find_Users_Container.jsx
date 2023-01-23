
import { connect } from "react-redux";
import { userFollow, userUnFollow, setUsers, setUserPage, setTotalCount, setFetch, setCurrentProfile } from "../../Redux/find_users_reducer";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.userPage}&count=${this.props.usersInOnePage}`)
            .then(response => {
                this.props.setFetch(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (changedPage) => {
         if (changedPage !== this.props.userPage){
            this.props.setUserPage(changedPage);
            this.props.setFetch(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${changedPage}&count=${this.props.usersInOnePage}`)
                .then(response => {
                    this.props.setFetch(false);
                    this.props.setUsers(response.data.items);
                })
            }
    }

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
                    setCurrentProfile={this.props.setCurrentProfile} />}
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
    setCurrentProfile
})(UsersContainer)



export default Find_Users_Container