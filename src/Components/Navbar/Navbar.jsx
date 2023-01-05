import React from 'react'
import { NavLink } from 'react-router-dom';
import obj from './Navbar.module.css'
import NavbarFriends from './Navbar__Friends/Navbar__Friends';

const Navbar = (props) => {

  let NavFriends = props.users.map((friend) => {
    return (
      <NavbarFriends logo={friend.logo} surname={friend.surname} name={friend.name} />
    )
  })
  return (
    <nav className={obj.nav}>
      <div className={obj.item}>
        <NavLink to='/' className={navData => navData.isActive ? obj.active : obj.item}>
          Profile
        </NavLink>
      </div>
      <div className={obj.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? obj.active : obj.item}>
          Messages
        </NavLink>
      </div>
      <div className={obj.item}>
        <NavLink to='/news' className={navData => navData.isActive ? obj.active : obj.item}>
          News
        </NavLink>
      </div>
      <div className={obj.item}>
        <NavLink to='/music' className={navData => navData.isActive ? obj.active : obj.item}>
          Music
        </NavLink>
      </div>
      <div className={obj.item}>
        <NavLink to='/settings' className={navData => navData.isActive ? obj.active : obj.item}>
          Settings
        </NavLink>
      </div>
      <div className={obj.friends__block}>
        <h3>Friends</h3>
        <div className={obj.friends}>
          {NavFriends}
        </div>

      </div>
    </nav>
  );
};
export default Navbar;