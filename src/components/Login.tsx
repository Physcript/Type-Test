import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/authenticate/context';
import useAxios from '../hooks/useAxios';

const Login = () => {

    const authContext = useContext(AuthContext)

    const [ loginData,setLoginData ] = useState({
        email: '',
        password: ''
    })


    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name,value } = e.currentTarget
        setLoginData( (val) => ({
            ...val,
            [name]: value
        }) )
    }


    const loginHandler = () => {
        axios.request({
            method: 'post',
            url: 'http://localhost:1337/api/login',
            data: {
                email: loginData.email,
                password: loginData.password
            }
        }).then((response) => {
            const user = response.data.data
            authContext.authDispatch({type: 'LOGIN', payload: user})

        }).catch((error) => {
            console.log(error.response)
        })
    }

    return (
        <div style = {{  display: 'flex' , flexDirection: 'column', gap: '5px'}} >
            <div style = {{
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
                gap:'5px'
            }}>
                <input
                    placeholder = 'Email'
                    name = 'email'
                    onChange = { onChange }
                />
                <input
                    name = 'password'
                    placeholder = 'Password'
                    onChange = { onChange }
                />
            </div>
            <div style = {{
                display: 'flex',
                flexDirection: 'column',
                width: '100px',
                gap:'5px'
            }}>
                <button
                    style = {{ borderRadius: '0' , boxShadow: 'none'}}
                    onClick = { loginHandler }
                >Login</button>
            </div>
        </div>
    )
}

export default Login
