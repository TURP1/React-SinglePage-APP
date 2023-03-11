import React, { useEffect, useState } from "react";
import obj from "./Profile__Info.module.css"



const Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const changeEditMode = () => {
        if (editMode) {
            setEditMode(false);
            props.changeStatus(status)
        }
        else {
            setEditMode(true)
        }
    }

    const onStatusChange = (e) => {
        let newStatusValue = e.target.value;
        setStatus(newStatusValue);
    }
    return <div className={obj.profile__info_details_status}>
        {!editMode
            ? <div >
                <span onClick={changeEditMode}>{props.status}</span>
            </div>
            : < div >
                <input autoFocus type="text" onBlur={changeEditMode} value={status} onChange={onStatusChange} />
            </div>
        }
    </div>
}


export default Status