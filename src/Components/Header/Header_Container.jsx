import React from 'react';
import Header from './Header'
import { getUserData, getProfile } from '../../Redux/auth_reducer';
import { connect } from 'react-redux';

class Header_Component extends React.Component {
  componentDidMount() {
    this.props.getUserData();
    if(this.props.authorized){
      this.props.getProfile(this.props.id);
    }
  };

  
  render() {
    return <Header {...this.props} />
  };
};


let mapStateToProps = (state) => {
  return {
    authorized: state.authReducer.authorized,
    email: state.authReducer.email,
    littleImage: state.authReducer.littleImage,
    id: state.authReducer.id
  }
}
export default connect(mapStateToProps, { getUserData, getProfile })(Header_Component);