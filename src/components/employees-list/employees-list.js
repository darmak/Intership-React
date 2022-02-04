import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers} from '../../features/actionCreator';
import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
    const employees = useSelector((state) => state.user.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const elements = employees.map(item => {
        const {_id, ...itemProps} = item;
        return <EmployeesListItem  _id={_id} {...itemProps} key={_id}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;