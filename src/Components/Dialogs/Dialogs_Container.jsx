import { connect } from 'react-redux';
import { newMessageAC, updateMessageTextAC } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPageData: state.dialogsPage,
    authMe: state.authReducer.authorized
  };
};

const DialogsContainer = connect(mapStateToProps, {newMessageAC, updateMessageTextAC})(Dialogs)


export default DialogsContainer;