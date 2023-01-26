import React from 'react';
import Header from './Header'
import axios from 'axios';
import { setUserData, setAuthUser, setLittleImage } from '../../Redux/auth_reducer';
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
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
              this.props.setLittleImage(response.data.photos.small);
            })
        };
      })
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
export default connect(mapStateToProps, { setUserData, setAuthUser, setLittleImage })(Header_Component);