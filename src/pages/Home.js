import React, {useState, useContext, useEffect} from "react";
// import Context
import {ActivityProvider, AlertProvider, MagazineProvider} from '../dataContext';
// img
import bg from "../img/bg.png";
import bg2 from "../img/bg2.png";
//Page Components
import Attività from "../components/Attività";
import AlertsSection from "../components/AlertsSection";
import Ads1 from "../components/Ads1";
import Ads2 from "../components/Ads2";
import Magazine from "../components/Magazine";
import Footer from "../components/Footer";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Home = () => {
    const [ads1, setAds1] = useState([
        {
            img: ''
        },
    ]);

    const [Mobile, setMobile] = useState(false);

    let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

    useEffect(()=> {
        if (isMobile) {
            setMobile(true)
        }
    },[]);
    
    return (
        <motion.div 
            variants={pageAnimation} 
            exit="exit"
            initial="hidden"
            animate="show" className='container-home'
        >
            <div className='bg'>
                {!Mobile && (
                    <img src={bg} alt="background"/>
                )}
                {Mobile && (
                    <img src={bg2} alt="background"/>
                )}
            </div>   
            <ActivityProvider>
                <Attività />
            </ActivityProvider>
            
            {!Mobile && (
                <Ads1 />
            )}
            

            <AlertProvider>
                <AlertsSection />
            </AlertProvider>

            {!Mobile && (
                <Ads2 />
            )}

            <MagazineProvider>
                <Magazine />
            </MagazineProvider>

            <Footer />
        </motion.div>
    );
};


export default Home;