import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import authReducer from './auth_reducer';
import dialogsReducer from './dialogs_reducer';
import findUserReducer from './find_users_reducer';
import profileReducer from './profile_reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app_reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUserReducer,
    authReducer: authReducer,
    app: appReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

window.store = store;



