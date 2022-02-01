import React from 'react';
import './app-info.css';

const AppInfo = ({numberUsers}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numberUsers}</h2>
        </div>
    )
}

export default AppInfo;