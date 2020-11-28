import React, {useContext} from "react";
import {AlertContext} from '../dataContext';
import Alert from "../components/Alert";
// import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion"
import { AnimateSharedLayout } from "framer-motion";


const AlertsSection = () => {
    const [alerts, setAlerts] = useContext(AlertContext);

    return (
        <AnimateSharedLayout>
            <motion.div layout className='alerts'>
                <h3 className='alert-title' ><FontAwesomeIcon icon={faBell}/> Avvisi<span>Mostra Tutti</span></h3>
                {alerts.map((alert, index) => (
                    <Alert key={index} title={alert.title} date={alert.date} description={alert.description} index={index} read={alert.read} />
                ))}
            </motion.div>
        </AnimateSharedLayout>
    );
};

export default AlertsSection;