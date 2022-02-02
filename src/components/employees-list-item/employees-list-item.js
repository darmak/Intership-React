import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../../features/actionCreator';

import './employees-list-item.css';

const EmployeesListItem = ({firstName, lastName, salary, id}) => {
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        dispatch(updateUser({firstName, lastName, salary: e.target.value, id}));
    }

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className="list-group-item-label">{firstName} {lastName}</span>
            <div><input onChange={onChangeHandler} data-id={id} type="text" className="list-group-item-input" defaultValue={salary}/> <span>$</span></div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" 
                        className="btn-trash btn-sm"
                        onClick={()=> dispatch(deleteUser(id))}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;