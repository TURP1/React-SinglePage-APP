import { connect } from "react-redux";
import {
    userFollow, userUnFollow, setUserPage,
    getUsersThunkActionCreator, followThunkAC, unFollowThunkAC
} from "../../Redux/find_users_reducer";
import React, { useEffect } from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getIsFetched, getIsFollowingFetched, getUserPage, getUsersFilter, getUsersInOnePage, getUsersTotalCount } from "../../Redux/users_selectors";



const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsersThunkActionCreator(props.userPage, props.usersInOnePage)
    }, [props.userPage, props.usersInOnePage]);
    
   let onPageChanged = (changedPage) => {
        if (changedPage !== props.userPage) {
            props.setUserPage(changedPage);
            props.getUsersThunkActionCreator(changedPage, props.usersInOnePage);
        }
    };

    return <>
        {props.isFetched === true
            ? <Preloader />
            : <Users users={props.users}
                usersTotalCount={props.usersTotalCount}
                usersInOnePage={props.usersInOnePage}
                userPage={props.userPage}
                onPageChanged={onPageChanged}
                follow={props.followThunkAC}
                unFollow={props.unFollowThunkAC}
                isFollowingFetched={props.isFollowingFetched}
            />}
    </>
};


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

const Find_Users_Container_useHooks = connect(mapPropsToState, {
    userFollow, userUnFollow, setUserPage,
    getUsersThunkActionCreator, followThunkAC, unFollowThunkAC
})(UsersContainer)



export default Find_Users_Container_useHooks