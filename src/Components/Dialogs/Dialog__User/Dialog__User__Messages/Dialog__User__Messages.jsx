import React from 'react';
import { NEW_MESSAGE_ACTION_CREATOR, UPDATE_MESSAGE_TEXT_ACTION_CREATOR } from '../../../../Redux/state';
import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';

const DialogUserMessages = (props) => {

  let dialogs = props.users[0].messagesData.map((message) => {
    return (
      <DialogUserMessage message={message.message} id={message.id} user={message.user} />
    )
  })

  let textContentHtml = React.createRef();

  let addMessage = () => {
    props.action(NEW_MESSAGE_ACTION_CREATOR())
    clearInput()
  }

  function clearInput() {
    textContentHtml.current.value = ``;
  }

  const messageListener = () => {
    let text = textContentHtml.current.value;
    props.action(UPDATE_MESSAGE_TEXT_ACTION_CREATOR(text));
  }

  return (
    <div className={obj.dialog__user__messages}>
      <div>
        {dialogs}
      </div>

      <div className={obj.dialog__user_messages_text}>
        <textarea ref={textContentHtml} cols="50" rows="3"
          onChange={messageListener}
          value={props.newMessageText}
          onFocus={clearInput}
        />
        <button onClick={addMessage} > Send</button>
      </div>
    </div>
  )
}

export default DialogUserMessages;