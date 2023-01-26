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

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });

export const setAuthUser = (isAuth) => ({ type: SET_AUTH, isAuth });

export const setLittleImage = (littleImage) => ({ type: SET_LITTLE_IMAGE, littleImage });







export default authReducer;