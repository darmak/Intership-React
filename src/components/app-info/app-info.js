import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers} from '../../features/actionCreator';

import './app-info.css';

const AppInfo = () => {
    const employees = useSelector((state) => state.user.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees.length}</h2>
        </div>
    )
}

export default AppInfo;