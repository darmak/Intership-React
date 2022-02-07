import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationRoute, authorizationRoute } from '../../features/employee-slice.js';
import { authorizationUser } from '../../features/actionCreator.js'

import './authorization-form.css';

const AuthorizationForm = () => {
    const [user, setUser] = useState({ email:'', password:'' });

    const dispatch = useDispatch();

    const registrationHandleClick = (e) => {
        dispatch(registrationRoute());
    }

    const onValueChange = (e) => {
        const newItem = {...user,[e.target.name]:e.target.value};
        setUser(newItem);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.email.length !== 0 && user.password.length !== 0) {
            dispatch(authorizationUser(user))
                .then(res => {
                    if(res.payload) {
                        setUser({email:'', password:''});
                        dispatch(authorizationRoute());
                        localStorage.setItem("token", res.payload.token);
                    } else {
                        alert("aaaaa");
                    }
                });
        }
    }

    return (
        <>
        <div className="registration-header">
            <h1>Авторизация</h1>
        </div>
        <div className="registration-form">
            <form className="add-form"
                onSubmit={onSubmit}>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите email"
                    name="email"
                    value={user.email}
                    onChange={onValueChange}/>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите пароль"
                    name="password"
                    value={user.password}
                    onChange={onValueChange}/>
                <div className="btns-wrapper">
                    <button 
                        type="submit"
                        className="btn btn btn-primary registration-btn">
                            Войти
                    </button>
                    <button 
                        type="button"
                        className="btn btn btn-primary registration-btn"
                        onClick={registrationHandleClick}>
                            Регистрация
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AuthorizationForm;