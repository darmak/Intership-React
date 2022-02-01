import React from 'react';

import './employees-list-item.css';

const EmployeesListItem = ({firstName, lastName, salary, deleteEmployees, id, updateSalary}) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className="list-group-item-label">{firstName} {lastName}</span>
            <div><input onChange={ e => updateSalary(e)} data-id={id} type="text" className="list-group-item-input" defaultValue={salary}/> <span>$</span></div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" 
                        className="btn-trash btn-sm"
                        onClick={()=>deleteEmployees(id)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;