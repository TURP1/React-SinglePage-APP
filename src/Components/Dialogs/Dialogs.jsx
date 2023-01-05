import React from 'react'
import obj from './Dialogs.module.css'
import DialogUser from "./Dialog__User/Dialog__User";
import DialogUserMessages from './Dialog__User__Messages/Dialog__User__Messages';




const Dialogs = (props) => {

  const DialogsElement = props.dialogsPageData.dialogsPage.users.map(user => (< DialogUser
    id={user.id}
    userName={user.name}
    logo={user.logo}
    className={obj.dialog__user} />));

  return (
    <div className={obj.dialogs}>
      <div className={obj.dialog__users}>
        {DialogsElement}
      </div>
      <DialogUserMessages dialogsPageData={props.dialogsPageData}
    dialogsPageMethods={props.dialogsPageMethods}/>
    </div>

  );

};
export default Dialogs;