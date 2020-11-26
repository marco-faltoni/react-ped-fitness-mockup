import React, {useState, useContext} from "react";
import {AlertContext} from '../dataContext';

const Alerts = () => {
    const [alerts, setAlerts] = useContext(AlertContext);
    return (
        <div className='alerts'>
            {alerts.map(alert => (
                <h1> {alert.title} </h1>
            ))}
        </div>
    );
};

export default Alerts;