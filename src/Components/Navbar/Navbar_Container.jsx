import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) => {
  return{
    users: state.dialogsPage.users
  };
};


const NavbarContainer = connect(mapStateToProps, {})(Navbar)

export default NavbarContainer;