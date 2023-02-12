import { authAPI, profileAPI } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LITTLE_IMAGE = "SET_LITTLE_IMAGE";



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    littleImage: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
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

const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

const setLittleImage = (littleImage) => ({ type: SET_LITTLE_IMAGE, littleImage });

export const getUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode !== 1) {
                    let { id, email, login } = response.data.data;
                    dispatch(setUserData(id, email, login, true));
                };
            })
    }
}
export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(response => {
                dispatch(setLittleImage(response.data.photos.small));
            })
    };
}

export const loginMe = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginMe(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) 
                {dispatch(getUserData())}
                else alert(response.data.messages)
            });
    }
};
export const logout = () => {
    return (dispatch) => {
        authAPI.deleteMe()
            .then(response => {
                if (response.data.resultCode === 0) 
                {  dispatch(setUserData(null, null, null, false))}
                else alert(response.data.messages)
            });
    }
};






export default authReducer;