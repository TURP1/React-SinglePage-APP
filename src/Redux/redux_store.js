import { combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;

window.store = store;