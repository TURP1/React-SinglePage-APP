import React from 'react';
import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';
import { useForm } from 'react-hook-form';


function MessageForm(props) {
  const {
    register,
    resetField,
    handleSubmit,
  } = useForm();
  const onSubmit = data => {
    props.onSubmit(data)
    resetField("message");
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="message" {...register("message", { maxLength: 180 })} />

      <input type="submit" />
    </form>
  );
}


const DialogUserMessages = (props) => {

  let dialogs = props.dialogsPageData.users[0].messagesData.map((message) => {
    return (
      <DialogUserMessage message={message.message} id={message.id} user={message.user} key={message.id} />
    )
  })


  return (
    <div className={obj.dialog__user__messages}>
      <div>
        {dialogs}
      </div>

      <div className={obj.dialog__user_messages_text}>
        <MessageForm onSubmit={props.submit} />
      </div>
    </div>
  )
}

export default DialogUserMessages;