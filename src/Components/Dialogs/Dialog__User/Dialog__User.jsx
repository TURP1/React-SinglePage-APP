import React from 'react'
import { NavLink } from 'react-router-dom';
import obj from './Dialog__User.module.css'

const DialogUser = (props)=>{
  let path = "/dialogs/" + props.id;

    return(
            <div className={obj.dialog__user}>
              <img src={props.logo} alt="" className={obj.dialog__user__logo} />
              <NavLink to={path}>{props.userName}</NavLink>
                </div>
                
                
    );  
};
export default DialogUser;