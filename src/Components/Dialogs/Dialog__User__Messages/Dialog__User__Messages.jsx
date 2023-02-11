import React from 'react';
import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';
import { Field, reduxForm } from 'redux-form'
import { maxLength300, Textarea } from '../../common/FormControls/FormControls';


export let MessageForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>{
    <div>
      <Field className={obj.dialog__user_messages_textarea} name="message" component={Textarea}
       type="text" cols="50" rows="3" validate={maxLength300}
      />
      <button className={obj.dialog__user_messages_btn} type="submit" > Send</button>
    </div>
  }</form>
}

MessageForm = reduxForm({
  // a unique name for the form
  form: 'messageForm'
})(MessageForm)



const DialogUserMessages = (props) => {

  let dialogs = props.dialogsPageData.users[0].messagesData.map((message) => {
    return (
      <DialogUserMessage message={message.message} id={message.id} user={message.user} />
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