import React, { useEffect } from 'react';
import Header from './Header'
import { getProfile, logout } from '../../Redux/auth_reducer';
import { connect } from 'react-redux';

const Header_Component = (props) => {

  let { authorized, id, getProfile } = props;
  useEffect(() => {
    if (authorized) {
      getProfile(id);
    }
  }, [authorized, id, getProfile])

  return <Header {...props} />
};


let mapStateToProps = (state) => {
  return {
    authorized: state.authReducer.isAuth,
    email: state.authReducer.email,
    littleImage: state.profilePage.currentProfileInfo.photos.small,
    authorizedId: state.authReducer.id,
    currentProfileId : state.profilePage.currentProfileInfo.userId
  }
}
export default connect(mapStateToProps, { getProfile, logout })(Header_Component);