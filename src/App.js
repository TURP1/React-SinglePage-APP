import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/Dialogs_Container';
import Find_Users_Container from './Components/Find_Users/Find_Users_Container';
import Header_Component from './Components/Header/Header_Container';
import Music from './Components/Music/Music';
import NavbarContainer from './Components/Navbar/Navbar_Container';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/Profile_Container';
import Settings from './Components/Settings/Settings';

function App(props) {

  return (
    <div className="app-wrapper">
      <Header_Component />
      <NavbarContainer store={props.store} />

      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile/:UserId' element={
            <ProfileContainer
              store={props.store}
            />}
          />
          <Route path='/dialogs/*' element={
            <DialogsContainer
              store={props.store}
            />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/findUsers' element={<Find_Users_Container 
          store={props.store}/>}
           />
        </Routes>
      </div>
    </div>

  );
}

export default App;
