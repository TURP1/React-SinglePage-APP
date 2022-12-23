import React from 'react'
import obj from './Dialogs.module.css'
import DialogUserMessages from './Dialog__User/Dialog__User__Messages/Dialog__User__Messages';
import DialogUser from "./Dialog__User/Dialog__User";



const Dialogs = (props) => {

  const MessagesData = props.messageDataArray[0];

  const DialogsData = props.messageDataArray[1];

  const DialogsElement = DialogsData.map(dialog => (< DialogUser id={dialog.id} userName={dialog.userName} className={obj.dialog__user} />))


  return (
    <div className={obj.dialogs}>
      <div className={obj.dialog__users}>
        {DialogsElement}
      </div>
      <DialogUserMessages MessagesData={MessagesData}/>
    </div>
  );
};
export default Dialogs;