import { authAPI, profileAPI, securityApi } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LITTLE_IMAGE = "SET_LITTLE_IMAGE";
const SET_AUTH = "SET_AUTH";
const SET_CAPTCHA = "SET_CAPTCHA";
const SET_ERROR = "SET_ERROR";

let error10Count = 0;

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    littleImage: null,
    captcha: null,
    errorMessage: null
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
        case SET_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }

        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }

        }
        default:
            return state;
    }
};

const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });

const setLittleImage = (littleImage) => ({ type: SET_LITTLE_IMAGE, littleImage });

const setAuth = (isAuth) => ({ type: SET_AUTH, isAuth });

const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });

const setErrorMessage = (errorMessage) => ({ type: SET_ERROR, errorMessage })



export const getUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe()
        if (response.data.resultCode !== 1) {
            let { id, email, login } = response.data.data;
            dispatch(setUserData(id, email, login));
            dispatch(setAuth(true))
        };

    };
}
export const getProfile = (id) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(id);
        dispatch(setLittleImage(response.data.photos.small));

    };
}

export const loginMe = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.loginMe(email, password, rememberMe, captcha)
                if (response.data.resultCode === 0) {
                    dispatch(getUserData());
                    dispatch(setCaptcha(null));
                    dispatch(setErrorMessage(null));
                    error10Count = 0;
                }
                else if (response.data.resultCode === 10) {
                    if (error10Count < 1) {
                        dispatch(setErrorMessage("Add Captcha"))
                        error10Count++;
                    }
                    else {
                        dispatch(setErrorMessage(response.data.messages[0]));
                        error10Count++;
                    }
                    dispatch(getCaptcha());

                }
                else dispatch(setErrorMessage(response.data.messages[0]))
    };
};

export const logout = () => {
    return async(dispatch) => {
       let response = await authAPI.deleteMe()
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null))
                    dispatch(setAuth(false))
                }
                else alert(response.data.messages)
    };
};

export const getCaptcha = () => {
    return async(dispatch) => {
        let response = await securityApi.getCaptcha()
                dispatch(setCaptcha(response.data.url))
    };
};

export default authReducer;