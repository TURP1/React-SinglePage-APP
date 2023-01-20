
import { connect } from "react-redux";
import { SET_USER_AC, SET_USER_PAGE_AC, USER_FOLLOW_AC, USER_UNFOLLOW_AC, SET_TOTAL_COUNT_AC } from "../../Redux/find_users_reducer";
import Find_UsersC from "./Find_UsersС";


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




const Find_Users_Container = connect(mapPropsToState, mapDispatchToState)(Find_UsersC)



export default Find_Users_Container