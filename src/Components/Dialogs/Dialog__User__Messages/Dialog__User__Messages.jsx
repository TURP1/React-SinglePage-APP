import React from 'react';
import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';

const DialogUserMessages = (props) => {

  let dialogs = props.dialogsPageData.dialogsPage.users[0].messagesData.map((message) => {
    return (
      <DialogUserMessage message={message.message} id={message.id} user={message.user} />
    )
  })

  let textContentHtml = React.createRef();

  let onMessageAdd = () => {
    props.dialogsPageMethods.newMessage();
    clearInput();
  };

  function clearInput() {
    textContentHtml.current.value = ``;
  };

  const onMessageChange = () => {
    let text = textContentHtml.current.value;
    props.dialogsPageMethods.updateMessageText(text);
  };

  return (
    <div className={obj.dialog__user__messages}>
      <div>
        {dialogs}
      </div>

      <div className={obj.dialog__user_messages_text}>
        <textarea ref={textContentHtml} cols="50" rows="3"
          onChange={onMessageChange}
          value={props.dialogsPageData.dialogsPage.newMessageText}
          onFocus={clearInput}
        />
        <button onClick={onMessageAdd} > Send</button>
      </div>
    </div>
  )
}

export default DialogUserMessages;