import React, {useState, useContext, useEffect} from "react";
// import Context
import {ActivityProvider, FilterProvider} from '../dataContext';
import {ActivityContext} from '../dataContext';
// img
import bg3 from "../img/bg3.png";
import bg4 from "../img/bg4.png";
//Page Components
import Calendario from "../components/Calendario";
import CalendarioMobile from "../components/CalendarioMobile";
import Filtri from "../components/Filtri";
import FiltriMobile from "../components/FiltriMobile";
import Card from "../components/Card";
import CardMobile from "../components/CardMobile";
import Footer from "../components/Footer";
//Animations
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
import { pageAnimation } from "../animation";


const Booking = () => {
    // const [activities, setActivities] = useContext(ActivityContext);

    const [Mobile, setMobile] = useState(false);

    let isMobile = window.matchMedia("only screen and (max-width: 1199px)").matches;

    // useEffect(()=> {
    //     if (isMobile) {
    //         setMobile(true)
    //     }
    // },[]);



    return (
        <motion.div
            variants={pageAnimation} 
            exit="exit"
            initial="hidden"
            animate="show"
            className='container-booking'
        >

            {!isMobile && (
                <>   
                    <div className="bg3">
                        <Calendario />
                    </div>
                    <div className="bg4">
                    <ActivityProvider>
                        <FilterProvider>
                            <Filtri />
                            <Card />
                            <Footer />
                        </FilterProvider>
                    </ActivityProvider>
                    </div>
                </>
            )}

            {isMobile && (
                <>   
                    <div className="bg3">
                        <CalendarioMobile />
                    </div>
                    <div className="bg4">

                    <ActivityProvider>
                        <AnimateSharedLayout>
                            <FilterProvider>
                                <FiltriMobile />
                                <CardMobile />
                                <Footer />
                            </FilterProvider>
                        </AnimateSharedLayout>
                    </ActivityProvider>
                    </div>
                </>
            )}
            
            {/* <ActivityProvider> */}
                {/* <FilterProvider>
                    <Card />
                </FilterProvider> */}
            {/* </ActivityProvider> */}

            {/* <Footer /> */}
        </motion.div>
    );
};


export default Booking;