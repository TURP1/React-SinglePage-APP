import React from 'react'
import obj from './Dialogs.module.css'
import DialogUserMessages from './Dialog__User/Dialog__User__Messages/Dialog__User__Messages';
import DialogUser from "./Dialog__User/Dialog__User";



const Dialogs = () => {

  const DialogsData = [
    { id: 1, userName: "Sasha" },
    { id: 2, userName: "Ivan" },
    { id: 3, userName: "Leroy" },
    { id: 4, userName: "Leo" },
    { id: 5, userName: "Vlad" },
  ];

  const DialogsElement = DialogsData.map(dialog => (< DialogUser id={dialog.id} userName={dialog.userName} className={obj.dialog__user} />))


  return (
    <div className={obj.dialogs}>
      <div className={obj.dialog__users}>
        {DialogsElement}
      </div>
      <DialogUserMessages />
    </div>
  );
};
export default Dialogs;