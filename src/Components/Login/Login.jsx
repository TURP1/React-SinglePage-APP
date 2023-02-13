import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { email, Input, maxLength15, minLength8, required } from "../common/FormControls/FormControls";
import obj from "./Login.module.css"

let Error = props => {
    if (props.error) {
        return <div className={obj.errorMessage}>
            {props.error}
        </div>
    }

}


let Captcha = props => {
    if (props.captcha) {
        return <div>
            <img src={props.captcha} alt="captcha" />
            <div>
                <Field component="input" type="text" name="captcha" />
            </div>

        </div>
    }

}

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
                <Error error={props.isError}></Error>
                <Captcha captcha={props.captcha} />
                <button className={obj.submitBtn} type="submit">Submit</button>
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
            <LoginForm onSubmit={props.onSubmit} captcha={props.captcha} isError={props.error} />
        </div>
    )
}



export default Login