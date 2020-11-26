import React, {useState, useContext} from "react";
// import Context
import {ActivityProvider, AlertProvider, MagazineProvider} from '../dataContext';
// import {AlertContext, MagazineContext} from '../dataContext';
//Page Components
import Attività from "../components/Attività";
import Alerts from "../components/Alerts";
import Ads from "../components/Ads";
import Magazine from "../components/Magazine";
import Footer from "../components/Footer";

const Home = () => {
    // const [alerts, setAlerts] = useContext(AlertContext);
    return (
        <div className='container-home'>
            <Attività />
            <Ads />
            <AlertProvider>
                <Alerts />
            </AlertProvider>
            <Ads />
            <MagazineProvider>
                <Magazine />
            </MagazineProvider>
            <Footer />
            
            
        </div>
    );
};


export default Home;