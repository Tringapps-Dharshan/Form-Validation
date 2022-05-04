import React from 'react'
import { useForm } from 'react-hook-form'
import { } from 'react-router-dom'
function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    let details = {
        "firstname": watch("first_name"),
        "lastname": watch('last_name'),
        "email": watch('email'),
        "password": watch('password'),
    };
    console.log(details);
    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("first_name", { required: "firstname is required" })} placeholder="First name" />
                <small>{errors.first_name?.message}</small>
                <input {...register("last_name", { required: "lastname is required" })} placeholder="Last name" />
                <small>{errors.last_name?.message}</small>
                <input {...register("email", { required: "email id is required", pattern: { value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/, message: 'Enter valid email id' } })} placeholder="username@gmail.com" />
                <small>{errors.email?.message}</small>
                <input {...register("password", { required: "Enter a password", minLength: { value: 8, message: 'Minimium 8 or more charaters' } })} placeholder="Password" type="password" />
                <small>{errors.password?.message}</small>
                <input type='submit' value='Create' />
            </form>
        </div>
    );
}

export default Form
