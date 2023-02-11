import React from 'react'

//Validate templates
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
    value && value.length < min ? `Email must contain at least ${min} symbols` : undefined



export const required = value => value ? undefined : 'Required';

export const maxLength15 = maxLength(15);
export const maxLength300 = maxLength(300);

export const minLength8 = minLength(8);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined

export const Input = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            {touched && error
                ? <input style={{ border: "solid 3px red" }} {...input} placeholder={label} type={type} />
                : <input {...input} placeholder={label} type={type} />}
            {touched && ((error && <span style={{ color: "red", padding: "10px" }}>{error}</span>))}
        </div>
    </div>
)
export const Textarea = ({ cols, rows, input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} type={type} cols={cols} rows={rows} />
            {touched && ((error && <span style={{ color: "red", padding: "10px" }}>{error}</span>))}
        </div>
    </div>
)
