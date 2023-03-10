import React from 'react'
import { Navigate } from 'react-router-dom';
import obj from './Dialogs.module.css'
import DialogUser from "./Dialog__User/Dialog__User";
import DialogUserMessagesContainer from './Dialog__User__Messages/Dialog__User__Messages_Container';




const Dialogs = (props) => {

  const DialogsElement = props.dialogsPageData.users.map(user => (< DialogUser
    id={user.id}
    key={user.id}
    userName={user.name}
    logo={user.logo}
    className={obj.dialog__user} />));

  if (!props.authMe) {
    return <Navigate to='/login' />
  }
  return (
    <div className={obj.dialogs}>
      <div className={obj.dialog__users}>
        {DialogsElement}
      </div>
      <DialogUserMessagesContainer dialogsPageData={props.dialogsPageData}
        addNewMessage={props.addNewMessage} />
    </div>

  );

};
export default Dialogs;