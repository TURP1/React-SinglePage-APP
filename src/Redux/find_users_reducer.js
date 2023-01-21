const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USER = "SET_USER";
const SET_USER_PAGE = "SET_USER_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_FETCHING = "SET_FETCHING"

let initialState = {
    users: [
    ],
    userPageNumber: 1,
    usersInOnePage: 100,
    usersTotalCount: 10,
    isFetched: true


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

        default:
            return state;
    }
};

export const USER_FOLLOW_AC = (userID) => ({ type: USER_FOLLOW, id: userID });

export const USER_UNFOLLOW_AC = (userID) => ({ type: USER_UNFOLLOW, id: userID });

export const SET_USER_AC = (users) => ({ type: SET_USER, users });

export const SET_USER_PAGE_AC = (userPage) => ({ type: SET_USER_PAGE, userPage });

export const SET_TOTAL_COUNT_AC = (usersTotalCount) => ({ type: SET_TOTAL_COUNT, usersTotalCount });

export const SET_FETCHING_AC = (isFetched) => ({ type: SET_FETCHING, isFetched })





export default findUserReducer;