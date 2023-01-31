import { connect } from 'react-redux';
import { newMessageAC, updateMessageTextAC } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPageData: state.dialogsPage
  };
};

const DialogsContainer = connect(mapStateToProps, {newMessageAC, updateMessageTextAC})(Dialogs)


export default DialogsContainer;