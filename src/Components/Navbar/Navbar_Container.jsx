import React from 'react'
import Navbar from './Navbar';


const NavbarContainer = (props) => {
debugger
  let users = props.store.getState().dialogsPage.users
  
  return (
    <Navbar users={users}/>
  );
};

export default NavbarContainer;