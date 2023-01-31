import React from 'react';
import Header from './Header'
import { authMeThunkAC } from '../../Redux/auth_reducer';
import { connect } from 'react-redux';

class Header_Component extends React.Component {
  componentDidMount() {
    this.props.authMeThunkAC()
  };

  render() {
    return <Header {...this.props} />
  };
};


let mapStateToProps = (state) => {
  return {
    authorized: state.authReducer.authorized,
    email: state.authReducer.email,
    littleImage: state.authReducer.littleImage
  }
}
export default connect(mapStateToProps, { authMeThunkAC })(Header_Component);