import React, { useEffect } from 'react';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const App = () => {
    return (
       <div className="app">
            <AppInfo/>
            <EmployeesList/>
            <EmployeesAddForm/>
       </div>
    )
}

export default App;