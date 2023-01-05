import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/Dialogs_Container';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/Profile_Container';
import Settings from './Components/Settings/Settings';

function App(props) {

  let state = props.store.getState();

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={state.dialogsPage} />

      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/' element={
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
        </Routes>

      </div>
    </div>

  );
}

export default App;
