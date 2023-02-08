import React from "react";
import { useState } from "react";
import obj from "./Profile__Info.module.css"
let Status = (props) => {
    const [editMode, setEditMode] = useState(false)
    
    let activateEditMode = () => {
        
        setEditMode(true)
 
    }
    let deactivateEditMode = () => {
        setEditMode(false)
    }

        return <div className={obj.profile__info_details_status}>
            {!editMode
                ? <div >
                    <span onClick={activateEditMode}>{props.status}</span>
                </div>
                : < div >
                    <input autoFocus onBlur={deactivateEditMode} type="text" />
                </div>
            }
        </div>
    }


export default Status