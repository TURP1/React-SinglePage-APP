import React from 'react'
import { NEW_MESSAGE_ACTION_CREATOR, UPDATE_MESSAGE_TEXT_ACTION_CREATOR } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

  let state = props.store.getState();

  let newMessage = () => {
    props.store.dispatch(NEW_MESSAGE_ACTION_CREATOR());
  };

  const updateMessageText = (text) => {
    props.store.dispatch(UPDATE_MESSAGE_TEXT_ACTION_CREATOR(text));
  };

  let dialogsPageData = {
    dialogsPage: state.dialogsPage,

  };

  let dialogsPageMethods = {
    newMessage,
    updateMessageText
  }

  return (
    <Dialogs dialogsPageData={dialogsPageData}
    dialogsPageMethods={dialogsPageMethods} />
  )

};
export default DialogsContainer;