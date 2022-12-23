import obj from './Dialog__User__Messages.module.css'

const DialogUserMessage = (props) => {
  return (
    <div className={obj.dialog__user__message}>
      {props.message}
    </div>
  )
}

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