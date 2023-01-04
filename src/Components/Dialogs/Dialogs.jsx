import React from 'react'
import obj from './Dialogs.module.css'
import DialogUser from "./Dialog__User/Dialog__User";
import DialogUserMessagesContainer from './Dialog__User__Messages/Dialog__User__Messages_Container';



const Dialogs = (props) => {

  const DialogsElement = props.state.dialogsPage.users.map(user => (< DialogUser
    id={user.id}
    userName={user.name}
    logo={user.logo}
    className={obj.dialog__user} />))
  return (
    <div className={obj.dialogs}>
      <div className={obj.dialog__users}>
        {DialogsElement}
      </div>
      <DialogUserMessagesContainer
        state={props.state}
        store={props.store} />
    </div>

  );

};
export default Dialogs;