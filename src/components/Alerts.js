import React, {useState, useContext} from "react";
import {AlertContext} from '../dataContext';
// import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBell } from '@fortawesome/free-solid-svg-icons';

const Alerts = () => {
    const [alerts, setAlerts] = useContext(AlertContext);
    return (
        <div className='alerts'>
            <h3 className='alert-title' ><FontAwesomeIcon icon={faBell}/> Avvisi<span>Mostra Tutti</span></h3>
            {alerts.map(alert => (
                <div className="alert">
                    <h3> {alert.title} <span>{alert.date}<FontAwesomeIcon icon={faChevronDown}/> </span> </h3>
                    <p> {alert.description} </p>
                </div>
                
            ))}
        </div>
    );
};

export default Alerts;