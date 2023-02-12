import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        authMe: state.authReducer.isAuth
    }
}

let withAuthNavigate = (Component) => {

    let NavigateComponent = (props) => {

        if (!props.authMe) {
            return <Navigate to='/login' />
        }
        return <Component {...props} />
    }
   
    return connect(mapStateToProps)(NavigateComponent)
}

export default withAuthNavigate