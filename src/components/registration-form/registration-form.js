import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationRoute } from '../../features/employee-slice.js';
import { createNewUser } from '../../features/actionCreator.js';

import './registration-form.css';

const RegistrationForm = () => {
    const [newUser, setNewUser] = useState({firstName:'', lastName:'', email:'', password:'', salary:0 });

    const dispatch = useDispatch();

    const registrationHandleClick = (e) => {
        dispatch(registrationRoute());
    }

    const onValueChange = (e) => {
        const newItem = {...newUser,[e.target.name]:e.target.value};
        setNewUser(newItem);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (newUser.firstName.length !== 0 && newUser.lastName.length !== 0 && newUser.email.length !== 0 && newUser.password.length !== 0) {
            dispatch(createNewUser(newUser));
            setNewUser({firstName:'', lastName:'', email:'', password:''});
            registrationHandleClick();
        }
    }
    return (
        <>
        <div className="registration-header">
            <h1>Регистрация</h1>
        </div>
        <div className="registration-form">
            <form className="add-form"
                onSubmit={onSubmit}>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите имя"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={onValueChange}/>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите фамилию"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={onValueChange}/>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите зарплату"
                    name="salary"
                    value={newUser.salary}
                    onChange={onValueChange}/>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите email"
                    name="email"
                    value={newUser.email}
                    onChange={onValueChange}/>
                <input 
                    type="text"
                    className="form-control new-post-label registration-input"
                    placeholder="Введите пароль"
                    name="password"
                    value={newUser.password}
                    onChange={onValueChange}/>
                <div className="btns-wrapper">
                    <button 
                        type="submit"
                        className="btn btn btn-primary registration-btn">
                            Зарегистрироваться
                    </button>
                    <button 
                        type="button"
                        className="btn btn btn-primary registration-btn"
                        onClick={registrationHandleClick}>
                            Назад
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default RegistrationForm;