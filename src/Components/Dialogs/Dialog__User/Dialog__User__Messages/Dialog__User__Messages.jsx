import obj from './Dialog__User__Messages.module.css'
import DialogUserMessage from './Dialog__User__Messages_Message/Dialog__User__Messages-Message';

const DialogUserMessages = (props) => {
  const MessagesElement = props.MessagesData.map((message) => {
    return (
      <DialogUserMessage message={message.message} />
    )
  })

  return (
    <div div className={obj.dialog__user__messages}>
      {MessagesElement}
    </div>
  )
}

export default DialogUserMessages;