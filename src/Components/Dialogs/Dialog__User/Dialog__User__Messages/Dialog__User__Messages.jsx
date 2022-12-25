import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';

const DialogUserMessages = (props) => {
  
  let dialogs = props.Users[0].MessagesData.map((message) => {
      return (
        <DialogUserMessage message={message.message} id={message.id} />
      )
    })


  return (
    <div div className={obj.dialog__user__messages}>
      {dialogs}
    </div>
  )
}

export default DialogUserMessages;