import React, {useState} from 'react';

const EmployeesAddForm = ({addEmployees}) => {

    const [newEmployee, setNewEmployee] = useState({firstName:'',lastName:'',salary:''});

    const onValueChange = (e) => {
        const newItem = {...newEmployee,[e.target.name]:e.target.value};
        setNewEmployee(newItem);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (newEmployee.firstName.length !== 0 && newEmployee.lastName.length !== 0 && newEmployee.salary.length !== 0) {
            addEmployees(newEmployee);
            setNewEmployee({firstName:'',lastName:'',salary:''});
        }
    }

    return (
        <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                        onSubmit={onSubmit}>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="firstName"
                        value={newEmployee.firstName}
                        onChange={onValueChange}/>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Его фамилия?"
                        name="lastName"
                        value={newEmployee.lastName}
                        onChange={onValueChange}/>
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={newEmployee.salary}
                        onChange={onValueChange}/>
                    <button 
                        type="submit"
                        className="btn btn btn-primary">
                            Добавить
                    </button>
                </form>
            </div>
    )
}

export default EmployeesAddForm;