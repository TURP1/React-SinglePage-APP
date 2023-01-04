import React from 'react';
import { NEW_MESSAGE_ACTION_CREATOR, UPDATE_MESSAGE_TEXT_ACTION_CREATOR } from '../../../Redux/dialogs_reducer';
import DialogUserMessages from './Dialog__User__Messages';


const DialogUserMessagesContainer = (props) => {
debugger;
 
  let newMessage = () => {
    props.store.dispatch(NEW_MESSAGE_ACTION_CREATOR());
  };

  const updateMessageText = (text) => {
    props.store.dispatch(UPDATE_MESSAGE_TEXT_ACTION_CREATOR(text));
  };

  return (
   <DialogUserMessages newMessage={newMessage}
   updateMessageText={updateMessageText}
   users={props.state.dialogsPage.users}
   newMessageText={props.state.dialogsPage.newMessageText}
   
   />
  );
};

export default DialogUserMessagesContainer;