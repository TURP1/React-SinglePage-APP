import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getUser } from '../../Redux/profile_reducer';


let mapStateToProps = (state) => {
  return{
    users: state.dialogsPage.users,
    myId: state.authReducer.id
  };
};


const NavbarContainer = connect(mapStateToProps, {getUser})(Navbar)

export default NavbarContainer;