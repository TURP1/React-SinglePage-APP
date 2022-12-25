import React from 'react'
import obj from './Dialogs.module.css'
import DialogUserMessages from './Dialog__User/Dialog__User__Messages/Dialog__User__Messages';
import DialogUser from "./Dialog__User/Dialog__User";



const Dialogs = (props) => {
  const DialogsElement = props.state.map(user => (< DialogUser id={user.id} userName={user.name} className={obj.dialog__user} />))
  return (
    <div className={obj.dialogs}>
      <div className={obj.dialog__users}>
        {DialogsElement}
      </div>
      <DialogUserMessages Users={props.state}/>
    </div>
    
  );
 
};
export default Dialogs;