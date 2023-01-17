const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USER = "SET_USER";

let initialState = {
    users: [
    ]
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
            }
        default:
            return state;
    }
};

export const USER_FOLLOW_AC = (userID) => ({ type: USER_FOLLOW, id: userID });

export const USER_UNFOLLOW_AC = (userID) => ({ type: USER_UNFOLLOW, id: userID });

export const SET_USER_AC = (users) => ({ type: SET_USER, users })

export default findUserReducer;