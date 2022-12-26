import obj from './../Dialog__User__Messages.module.css'

const DialogUserMessage = (props) => {
  if (props.id % 2 === 0) {
    return (
      <div className={obj.dialog__user__message + " " + obj.dialog__user__message_rightSide}>
        {props.message}
      </div>
    )
  }
  else {
    return (
      <div className={obj.dialog__user__message + " " + obj.dialog__user__message_leftSide}>
        {props.message}
      </div>
    )
  }


}


export default DialogUserMessage;