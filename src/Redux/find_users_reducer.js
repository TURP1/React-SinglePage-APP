import { usersAPI } from "../API/api";

const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USER = "SET_USER";
const SET_USER_PAGE = "SET_USER_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_FETCHING = "SET_FETCHING";
const SET_FOLLOWING_FETCH = "SET_FOLLOWING_FETCH";

let initialState = {
    users: [
    ],
    userPageNumber: 1,
    usersInOnePage: 100,
    usersTotalCount: 10,
    isFetched: true,
    isFollowingFetched: []
}

const findUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })

            };
        case USER_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USER:
            return {
                ...state, users: [...action.users]
            };
        case SET_USER_PAGE:
            return {
                ...state, userPageNumber: action.userPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, usersTotalCount: action.usersTotalCount
            }
        case SET_FETCHING:
            return {
                ...state, isFetched: action.isFetched
            }
        case SET_FOLLOWING_FETCH:
            return {
                ...state,
                isFollowingFetched: action.isFetched
                    ? [...state.isFollowingFetched, action.id]
                    : state.isFollowingFetched.filter(id => id !== action.id)
            }
        default:
            return state;
    }
};

export const userFollow = (userID) => ({ type: USER_FOLLOW, id: userID });
export const userUnFollow = (userID) => ({ type: USER_UNFOLLOW, id: userID });
export const setUserPage = (userPage) => ({ type: SET_USER_PAGE, userPage });

const setUsers = (users) => ({ type: SET_USER, users });
const setTotalCount = (usersTotalCount) => ({ type: SET_TOTAL_COUNT, usersTotalCount });
const setFetch = (isFetched) => ({ type: SET_FETCHING, isFetched });
const setFollowingFetch = (isFetched, id) => ({ type: SET_FOLLOWING_FETCH, isFetched, id });

export const getUsersThunkActionCreator = (userPage, usersInOnePage) => {
    return async (dispatch) => {
        dispatch(setFetch(true));
        let data = await usersAPI.getUsers(userPage, usersInOnePage)

        dispatch(setFetch(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));

    }
};

export const followThunkAC = (id) => {
    return async (dispatch) => {
        dispatch(setFollowingFetch(true, id));
        await usersAPI.follow(id)

        dispatch(userFollow(id));
        dispatch(setFollowingFetch(false, id));

    }
};
export const unFollowThunkAC = (id) => {
    return async (dispatch) => {
        dispatch(setFollowingFetch(true, id));
        await usersAPI.unFollow(id)

        dispatch(userUnFollow(id));
        dispatch(setFollowingFetch(false, id));

    }
};



export default findUserReducer;