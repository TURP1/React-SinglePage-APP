
import { connect } from "react-redux";
import { SET_USER_AC, USER_FOLLOW_AC, USER_UNFOLLOW_AC } from "../../Redux/find_users_reducer";
import Find_UsersC from "./Find_UsersС";


let mapPropsToState = (state) => {
    return {
        users: state.findUsersPage.users
    }
};

let mapDispatchToState = (dispatch) => {
    return {
        userFollow: (id) => {dispatch(USER_FOLLOW_AC(id))} ,
        userUnFollow: (id) => {dispatch(USER_UNFOLLOW_AC(id))} ,
        setUsers: (users) => {dispatch(SET_USER_AC(users))}
    }
}




const Find_Users_Container = connect(mapPropsToState, mapDispatchToState)(Find_UsersC)



export default Find_Users_Container