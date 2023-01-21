
import { connect } from "react-redux";
import { SET_USER_AC, SET_USER_PAGE_AC, USER_FOLLOW_AC, USER_UNFOLLOW_AC, SET_TOTAL_COUNT_AC } from "../../Redux/find_users_reducer";
import axios from "axios";
import React from "react";
import Users from "./Users";



class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.userPage}&count=${this.props.usersInOnePage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (changedPage) => {
        debugger
        this.props.setUserPage(changedPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${changedPage}&count=${this.props.usersInOnePage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <Users users={this.props.users}
            userUnFollow={this.props.userUnFollow}
            userFollow={this.props.userFollow}
            usersTotalCount={this.props.usersTotalCount}
            usersInOnePage={this.props.usersInOnePage}
            userPage={this.props.userPage}
            onPageChanged={this.onPageChanged}/>
            
        )
    }
}

let mapPropsToState = (state) => {
    return {
        users: state.findUsersPage.users,
        userPage: state.findUsersPage.userPageNumber,
        usersInOnePage: state.findUsersPage.usersInOnePage,
        usersTotalCount: state.findUsersPage.usersTotalCount
    }
};

let mapDispatchToState = (dispatch) => {
    return {
        userFollow: (id) => {dispatch(USER_FOLLOW_AC(id))} ,
        userUnFollow: (id) => {dispatch(USER_UNFOLLOW_AC(id))} ,
        setUsers: (users) => {dispatch(SET_USER_AC(users))},
        setUserPage: (userPage) => {dispatch(SET_USER_PAGE_AC(userPage))},
        setTotalCount: (usersTotalCount) => {dispatch(SET_TOTAL_COUNT_AC(usersTotalCount))},
        
    }
}

const Find_Users_Container = connect(mapPropsToState, mapDispatchToState)(UsersContainer)



export default Find_Users_Container