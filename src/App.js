import { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './Components/common/Preloader/Preloader';
import DialogsContainer from './Components/Dialogs/Dialogs_Container';
import FindUsersContainerWithHooks from './Components/Find_Users/Find_Users_Container_Hooks';
import HeaderComponent from './Components/Header/Header_Container_Hooks';
import LoginContainer from './Components/Login/Login_Container';
import Music from './Components/Music/Music';
import NavbarContainer from './Components/Navbar/Navbar_Container';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/Profile_Container_Hooks';
import Settings from './Components/Settings/Settings';

import { initializeApp } from './Redux/app_reducer'

let App = (props) => {
  useEffect(()=>{
    alert(
      `AppEff`
    )
    props.initializeApp();
  },[props.initializeApp])
  

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
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/findUsers' element={<FindUsersContainerWithHooks />} />
        <Route path='/login' element={<LoginContainer />} />

      </Routes>
    </div>
  </div>
}



let mapDispatchToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapDispatchToProps, { initializeApp })(App);
