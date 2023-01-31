import usersAPI from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH = "SET_AUTH";
const SET_LITTLE_IMAGE = "SET_LITTLE_IMAGE";



let initialState = {
    id: null,
    email: null,
    login: null,
    authorized: false,
    littleImage: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                authorized: action.isAuth
            }

        }
        case SET_LITTLE_IMAGE: {
            return {
                ...state,
                littleImage: action.littleImage
            }

        }
        default:
            return state;
    }
};

const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });

const setAuthUser = (isAuth) => ({ type: SET_AUTH, isAuth });

const setLittleImage = (littleImage) => ({ type: SET_LITTLE_IMAGE, littleImage });

export const authMeThunkAC = () => {
    return (dispatch) => {
        usersAPI.authMe()
            .then(response => {
                if (response.data.resultCode !== 1) {
                    let { id, email, login } = response.data.data;
                    dispatch(setUserData(id, email, login));
                    dispatch(setAuthUser(true));
                    usersAPI.getProfile(id)
                        .then(response => {
                            dispatch(setLittleImage(response.data.photos.small));
                        })
                };
            })
    }
}





export default authReducer;