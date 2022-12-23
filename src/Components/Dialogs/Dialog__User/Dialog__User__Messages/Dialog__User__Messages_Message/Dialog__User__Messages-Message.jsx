import obj from './../Dialog__User__Messages.module.css'

const DialogUserMessage = (props) => {
  return (
    <div className={obj.dialog__user__message}>
      {props.message}
    </div>
  )
}


export default DialogUserMessage;