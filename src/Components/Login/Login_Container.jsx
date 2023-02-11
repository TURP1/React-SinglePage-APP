import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginMe } from '../../Redux/auth_reducer'
import { Login } from "./Login";


 const LoginContainer = (props) => {
    const submit = values => {
        let { email, password, rememberMe } = values
        console.log(email, password, rememberMe)
        props.loginMe(email, password, rememberMe)
    }
    return (
        <>
            <Login onSubmit={submit} />
        </>

    )
}

export default compose(
    connect(null, { loginMe })
)(LoginContainer)