import React from 'react'
import { connect } from 'react-redux';
import { NEW_MESSAGE_ACTION_CREATOR, UPDATE_MESSAGE_TEXT_ACTION_CREATOR } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPageData: state.dialogsPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newMessage: () => {
      dispatch(NEW_MESSAGE_ACTION_CREATOR());
    },
    updateMessageText: (text) => {
      dispatch(UPDATE_MESSAGE_TEXT_ACTION_CREATOR(text));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;