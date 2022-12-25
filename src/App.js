import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';

function App(props) {
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.Users}/>
      
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/'  element={<Profile state={props.state.ProfilePage}/>} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.Users} />} />
          <Route path='/news' element={<News />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>

    </div>


  );
}

export default App;
