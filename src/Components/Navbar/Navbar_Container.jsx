import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getUserThunkAC } from '../../Redux/profile_reducer';


let mapStateToProps = (state) => {
  return{
    users: state.dialogsPage.users,
    myId: state.authReducer.id
  };
};


const NavbarContainer = connect(mapStateToProps, {getUserThunkAC})(Navbar)

export default NavbarContainer;