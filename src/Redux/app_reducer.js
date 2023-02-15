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
    return (dispatch) => {
        let promice = dispatch(getUserData());
        // let authPromice2 = dispatch(getUserData());
        // let authPromice3 = dispatch(getUserData());
        promice
            .then(() => {
                dispatch(initializingSuccess())
            })

    }
};




export default appReducer;