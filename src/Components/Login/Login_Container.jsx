import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginMe } from '../../Redux/auth_reducer'
import { Login } from "./Login";


const LoginContainer = (props) => {
    const submit = values => {
        let { email, password, rememberMe } = values
        props.loginMe(email, password, rememberMe)
    }
    return (
        <>
            <Login onSubmit={submit} isAuth={props.isAuth} myId={props.myId} />
        </>

    )
}
const mapStateToProps = (state) => (
    { isAuth: state.authReducer.isAuth,
        myId: state.authReducer.id }
)
    

export default compose(
    connect(mapStateToProps, { loginMe })
)(LoginContainer)