import React from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, deleteEmployees, updateSalary}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem updateSalary={updateSalary} deleteEmployees={deleteEmployees} id={id} {...itemProps} key={id}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;