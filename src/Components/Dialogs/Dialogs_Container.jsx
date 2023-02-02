import { connect } from 'react-redux';
import withAuthNavigate from '../../HOC/withNavigateHOC';
import { newMessageAC, updateMessageTextAC } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPageData: state.dialogsPage,
  };
};

const AuthNavigateComponent = withAuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, {newMessageAC, updateMessageTextAC})(AuthNavigateComponent)


export default DialogsContainer;