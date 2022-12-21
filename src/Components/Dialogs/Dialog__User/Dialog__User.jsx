import React from 'react'
import { NavLink } from 'react-router-dom';
import obj from './Dialog__User.module.css'

const DialogUser = (props)=>{

  let path = "/dialogs/" + props.id;
  
    return(
            <div className={obj.dialog__user}>
              <NavLink to={path}>{props.userName}</NavLink>
                </div>
                
                
    );  
};
export default DialogUser;