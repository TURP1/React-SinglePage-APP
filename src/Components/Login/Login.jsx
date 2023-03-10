import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { email, Input, maxLength15, minLength8, required } from "../common/FormControls/FormControls";
import obj from "./Login.module.css"

import { useForm } from 'react-hook-form';


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
                <input type="text" name="captcha" {...props.register("captcha", { required: true })} />
            </div>

        </div>
    }

}

function LoginForm(props) {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();
    const onSubmit = data => {
        props.onSubmit(data)
    console.log(data);
    console.log(errors);
    }

    return (

        <form className={obj.loginForm} onSubmit={handleSubmit(onSubmit)}>

            {errors.email?.type === "required" && <p className={obj.errorMessage}>Email is required</p>}
            {errors.email?.type === "maxLength" && (
                <p className={obj.errorMessage}>Email must be less than 20 characters</p>
            )}
            {errors.email?.type === "pattern" && (
                <p className={obj.errorMessage}>Invalid email format</p>
            )}
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" {...register("email", { required: true, maxLength: 20, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />


            {errors.password?.type === "required"  && <p className={obj.errorMessage}>Password is required</p>}
            {errors.password?.type === "maxLength" && (
                <p className={obj.errorMessage}>Password must be less than 20 characters</p>
            )}
            {errors.password?.type === "minLength" && (
                <p className={obj.errorMessage}>Password must be at least 8 characters</p>
            )}
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" {...register("password", { required: true, maxLength: 20, minLength: 8 })} />



            <label htmlFor="rememberMe">RememberMe</label>
            <input type="checkbox" placeholder="Remember me" name="rememberMe"  {...register("rememberMe", {})} />

            <Error error={props.isError}></Error>
            <Captcha captcha={props.captcha} register={register}/>

            <input type="submit" />
        </form>
    );
}

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