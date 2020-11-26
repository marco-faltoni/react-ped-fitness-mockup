import React, {useState, useContext} from "react";
// import Context
import {ActivityProvider, AlertProvider, MagazineProvider} from '../dataContext';
// img
import bg from "../img/bg.png";
//Page Components
import Attività from "../components/Attività";
import Alerts from "../components/Alerts";
import Ads1 from "../components/Ads1";
import Ads2 from "../components/Ads2";
import Magazine from "../components/Magazine";
import Footer from "../components/Footer";

const Home = () => {
    const [ads1, setAds1] = useState([
        {
            img: ''
        },
    ]);
    
    return (
        <div className='container-home'>
            <div className='bg'>
                <img src={bg} alt="background"/>
            </div>   
            <ActivityProvider>
                <Attività />
            </ActivityProvider>

            <Ads1 />

            <AlertProvider>
                <Alerts />
            </AlertProvider>

            <Ads2 />

            <MagazineProvider>
                <Magazine />
            </MagazineProvider>

            <Footer />
        </div>
    );
};


export default Home;