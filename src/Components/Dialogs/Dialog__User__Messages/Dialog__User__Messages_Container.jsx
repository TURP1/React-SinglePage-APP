import React from 'react';
import DialogUserMessages from './Dialog__User__Messages';




const DialogUserMessagesContainer = (props) => {
  let submit = (values) => {
    props.addNewMessage(values.message);
  }


  return (
    <DialogUserMessages dialogsPageData={props.dialogsPageData} submit={submit} />
  )

}
export default DialogUserMessagesContainer;