import React from "react";
import { Field, reduxForm } from 'redux-form';



let LoginForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>{
        <>
            <div>
                <label htmlFor="email">Email</label>
                <Field component="input" type="email" name="email" placeholder="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field component="input" type="text" name="password" placeholder="password" />
            </div>
            <div>
                <label htmlFor="rememberMe">RememberMe</label>
                <Field component="input" type="checkbox" name="rememberMe" id="1" />
            </div>
            <button type="submit">Submit</button>
        </>

    }</form>
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export const Login = (props) => {

    return (
        <>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={props.onSubmit}  />
        </>

    )
}



export default Login