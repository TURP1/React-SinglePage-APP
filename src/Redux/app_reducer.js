import { getUserData } from "./auth_reducer";


const SET_INITIALIZING_SUCCESS = "SET_INITIALIZING_SUCCESS";



let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }

        default:
            return state;
    }
};

const initializingSuccess = () => ({ type: SET_INITIALIZING_SUCCESS });


export const initializeApp = () => {
    return async(dispatch) => {
        let authPromise = dispatch(getUserData());
        // let authPromise2 = dispatch(getUserData());
        // let authPromise3 = dispatch(getUserData());

        //Promise.all - when all dispatches will finish, await for promise
        await Promise.all([authPromise])
                dispatch(initializingSuccess())


    }
};




export default appReducer;