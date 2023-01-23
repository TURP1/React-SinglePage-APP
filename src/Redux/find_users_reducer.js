const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USER = "SET_USER";
const SET_USER_PAGE = "SET_USER_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_FETCHING = "SET_FETCHING";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";

let initialState = {
    users: [
    ],
    userPageNumber: 1,
    usersInOnePage: 100,
    usersTotalCount: 10,
    isFetched: true,
    currentProfile: 2
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
        case SET_CURRENT_PROFILE:
            return {
                ...state, currentProfile: action.currentProfile
            }

        default:
            return state;
    }
};

export const userFollow = (userID) => ({ type: USER_FOLLOW, id: userID });

export const userUnFollow = (userID) => ({ type: USER_UNFOLLOW, id: userID });

export const setUsers = (users) => ({ type: SET_USER, users });

export const setUserPage = (userPage) => ({ type: SET_USER_PAGE, userPage });

export const setTotalCount = (usersTotalCount) => ({ type: SET_TOTAL_COUNT, usersTotalCount });

export const setFetch = (isFetched) => ({ type: SET_FETCHING, isFetched });

export const setCurrentProfile = (currentProfile) => ({ type: SET_CURRENT_PROFILE, currentProfile });





export default findUserReducer;