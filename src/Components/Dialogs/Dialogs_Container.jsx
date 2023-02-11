import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthNavigate from '../../HOC/withAuthNavigateHOC';
import { addNewMessage } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPageData: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { addNewMessage }),
  withAuthNavigate
)(Dialogs)