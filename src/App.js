import React, { Suspense, useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './Components/common/Preloader/Preloader';
import DialogsContainer from './Components/Dialogs/Dialogs_Container';
import FindUsersContainerWithHooks from './Components/Find_Users/Find_Users_Container_Hooks';
import HeaderComponent from './Components/Header/Header_Container_Hooks';
import LoginContainer from './Components/Login/Login_Container';
import NavbarContainer from './Components/Navbar/Navbar_Container';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/Profile_Container_Hooks';
import Settings from './Components/Settings/Settings';
import { initializeApp } from './Redux/app_reducer'
import store from './Redux/redux_store';
import { getProfile } from '../src/Redux/auth_reducer';
const Music = React.lazy(() => import('./Components/Music/Music'));


let App = (props) => {

  let { authorized, authorizedId, getProfile } = props;
  useEffect(() => {
    if (authorized) {
      getProfile(authorizedId);
    }
  }, [authorized, authorizedId, getProfile]);

  let initializeApp = props.initializeApp;
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);


  if (!props.initialized) {
    return <Preloader />
  }
  return <div className="app-wrapper">
    <HeaderComponent />
    <NavbarContainer />

    <div className='app-wrapper__content'>
      <Routes>
        <Route path='/profile/:UserId' element={<ProfileContainer />} />
        <Route path='/dialogs/*' element={<DialogsContainer />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={
          <Suspense fallback={<Preloader />}>
            <Music />
          </Suspense>
        } />
        <Route path='/settings' element={<Settings />} />
        <Route path='/findUsers' element={<FindUsersContainerWithHooks />} />
        <Route path='/login' element={<LoginContainer />} />

      </Routes>
    </div>
  </div>
}

let mapDispatchToProps = (state) => ({
  initialized: state.app.initialized,
  authorized: state.authReducer.isAuth,
  authorizedId: state.authReducer.id,
  currentProfileId: state.profilePage.currentProfileInfo.userId
})

const AppContainer = connect(mapDispatchToProps, { initializeApp, getProfile })(App);


const NetworkApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default NetworkApp