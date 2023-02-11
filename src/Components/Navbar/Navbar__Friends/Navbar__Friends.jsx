import React from 'react'
import obj from './Navbar__Friends.module.css'

const NavbarFriends = (props) => {

  //map
  return (
    <div className={obj.friend}>
      <div className={obj.friend__logo}>
        <img src={props.logo} alt="logo" />
      </div>
      <div className={obj.friend__surname}>{props.surname}</div>
      <div className={obj.friend__name}>{props.name}</div>
    </div>
  );
};
export default NavbarFriends;