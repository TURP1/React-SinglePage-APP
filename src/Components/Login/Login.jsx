import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { email, Input, maxLength15, minLength8, required } from "../common/FormControls/FormControls";
import obj from "./Login.module.css"


let LoginForm = props => {
    const { handleSubmit } = props
    return <form className={obj.loginForm}
        onSubmit={handleSubmit}>{
            <>

                <Field component={Input} type="email" name="email"
                    placeholder="email" label="Email" validate={email} />


                <Field component={Input} type="password" name="password"
                    placeholder="password" label="Password" validate={[required, maxLength15, minLength8]} />


                <label htmlFor="rememberMe">RememberMe</label>
                <Field component="input" type="checkbox" name="rememberMe"
                    id="1" />

                <button type="submit">Submit</button>
            </>

        }</form>
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={`/profile/${props.myId}`} />
    }

    return (
        <div className={obj.loginFormWrapper}>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={props.onSubmit} />
        </div>

    )
}



export default Login