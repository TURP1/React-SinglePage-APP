import React from "react";
import { Component } from "react";
import obj from "./Profile__Info.module.css"



class StatusC extends Component {
    
    state = {
        editMode: false,
        statusText: this.props.status
    }

    onStatusChange = (e) => {
        let newStatusValue = e.target.value;
        this.setState({ statusText: newStatusValue });
    }

    activateEditMode = () => {
            this.setState({ editMode: true })
        
        
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.changeStatus(this.state.statusText)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({statusText: this.props.status})
        }
        
    }
    

    render() {
        return <div className={obj.profile__info_details_status}>
            {!this.state.editMode
                ? <div >
                    <span onClick={this.activateEditMode}>{this.state.statusText ? this.state.statusText : "no status"}</span>
                </div>
                : < div >
                    <input onChange={this.onStatusChange} autoFocus value={this.state.statusText} onBlur={this.deactivateEditMode} type="text" />
                </div>
            }
        </div>
    }

}


export default StatusC