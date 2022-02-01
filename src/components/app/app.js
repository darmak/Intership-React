import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { getAllUsers, deleteUser, addUser, updateUser } from '../../services/users';

import './app.css';

const App = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(data => {
                setEmployees(data);
            })
    }, []);

    const deleteEmployees = (id) => {
        deleteUser(id)
        .then(res => {
            getAllUsers()
                .then(data => {
                    setEmployees(data);
                })
        })
    };

    const addEmployees = (newItem) => {
        addUser(newItem)
        .then(res => {
            getAllUsers()
            .then(data => {
                setEmployees(data);
            })
        })
    };

    const updateSalary = (e) => {
        const userId = e.currentTarget.getAttribute("data-id");
        updateUser(e, userId);
    }


    return (
       <div className="app">
            <AppInfo numberUsers={employees.length}/>
            <EmployeesList data={employees} deleteEmployees={deleteEmployees} updateSalary={updateSalary}/>
            <EmployeesAddForm addEmployees={addEmployees}/>
       </div>
    )
}

export default App;