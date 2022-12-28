import React from 'react';
import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';

const DialogUserMessages = (props) => {

  let dialogs = props.Users[0].MessagesData.map((message) => {
    return (
      <DialogUserMessage message={message.message} id={message.id} user={message.user} />
    )
  })

  let textContentHtml = React.createRef();

  let addMessage = () => {
    props.newMessage();
    clearInput()
  }

  function clearInput() {
    textContentHtml.current.value = ``;
  }

  const messageListener = () => {
    let text = textContentHtml.current.value;
    props.updateMessageText(text);
  }



  return (
    <div className={obj.dialog__user__messages}>
      <div>
        {dialogs}
      </div>

      <div className={obj.dialog__user_messages_text}>
        <textarea ref={textContentHtml} cols="50" rows="3"
          onChange={messageListener}
          value={props.NewMessageText}
          onFocus={clearInput}
        />
        <button onClick={addMessage} > Send</button>
      </div>
    </div>
  )
}

export default DialogUserMessages;