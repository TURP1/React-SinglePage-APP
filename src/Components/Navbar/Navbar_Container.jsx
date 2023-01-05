import React from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) => {
  return{
    users: state.dialogsPage.users
  };
};

let mapDispatchToProps = () => {
  return{}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;