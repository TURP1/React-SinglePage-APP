import React from 'react';
import Header from './Header'
import {  getProfile, logout } from '../../Redux/auth_reducer';
import { connect } from 'react-redux';

class Header_Component extends React.Component {
  componentDidMount() {

    if (this.props.authorized) {
      this.props.getProfile(this.props.id);
    }
  };

    render() {
      return <Header {...this.props} />
    };
  };


let mapStateToProps = (state) => {
  return {
    authorized: state.authReducer.isAuth,
    email: state.authReducer.email,
    littleImage: state.authReducer.littleImage,
    id: state.authReducer.id
  }
}
export default connect(mapStateToProps, { getProfile, logout })(Header_Component);