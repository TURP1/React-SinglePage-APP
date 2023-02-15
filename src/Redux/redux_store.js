import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth_reducer';
import dialogsReducer from './dialogs_reducer';
import findUserReducer from './find_users_reducer';
import profileReducer from './profile_reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUserReducer,
    authReducer: authReducer,
    form: formReducer,
    app: appReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;