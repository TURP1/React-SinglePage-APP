import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginMe } from '../../Redux/auth_reducer'
import { Login } from "./Login";


const LoginContainer = (props) => {
    const submit = values => {
        let { email, password, rememberMe, captcha } = values
        props.loginMe(email, password, rememberMe, captcha)
    }
    return (
        <>
            <Login onSubmit={submit} isAuth={props.isAuth} myId={props.myId}
             captcha={props.captcha} error={props.error}/>
        </>

    )
}
const mapStateToProps = (state) => (
    { isAuth: state.authReducer.isAuth,
        myId: state.authReducer.id,
        captcha: state.authReducer.captcha,
        error:state.authReducer.errorMessage }
)
    

export default compose(
    connect(mapStateToProps, { loginMe })
)(LoginContainer)