import React from 'react';
import { useSelector } from 'react-redux';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import RegistrationForm from '../registration-form/registration-form';
import AuthorizationForm from '../authorization-form/authorization-form';

import './app.css';

const App = () => {
    const auth = useSelector((state) => state.user.authorization);
    const registration = useSelector((state) => state.user.registration);
    
    return (
       <div className="app">
           {auth ? (
                <>
                    <AppInfo/>
                    <EmployeesList/>
                    <EmployeesAddForm/>
                </>
           ) : (
                <>
                    {registration ? (
                        <RegistrationForm/>
                    ) : (
                        <AuthorizationForm/>
                    )}
                </>
           )

           }
       </div>
    )
}

export default App;