import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth_reducer';
import dialogsReducer from './dialogs_reducer';
import findUserReducer from './find_users_reducer';
import profileReducer from './profile_reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUserReducer,
    authReducer: authReducer
});

let store = createStore(reducers);

export default store;

window.store = store;