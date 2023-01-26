import React from 'react';
import Header from './Header'
import axios from 'axios';
import { setUserData, setAuthUser } from '../../Redux/auth_reducer';
import { connect } from 'react-redux';

class Header_Component extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      { withCredentials: true })
      .then(response => {
        if (response.data.resultCode !== 1) {
          let { id, email, login } = response.data.data;
          this.props.setUserData(id, email, login);
          this.props.setAuthUser(true);
          debugger
        }
      })
  }
  render() {
    return <Header {...this.props} />
  };
};


let mapStateToProps = (state) => {
  return {
    authorized: state.authReducer.authorized,
    email: state.authReducer.email

  }
}
export default connect(mapStateToProps, { setUserData, setAuthUser })(Header_Component);