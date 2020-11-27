import React, {useState, useContext, useEffect} from "react";
// import Context
import {ActivityProvider, FilterProvider} from '../dataContext';
import {ActivityContext} from '../dataContext';
// img
import bg3 from "../img/bg3.png";
import bg4 from "../img/bg4.png";
//Page Components
import Calendario from "../components/Calendario";
import Filtri from "../components/Filtri";
import Card from "../components/Card";
import Footer from "../components/Footer";


const Booking = () => {
    // const [activities, setActivities] = useContext(ActivityContext);

    const [Mobile, setMobile] = useState(false);

    let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

    useEffect(()=> {
        if (isMobile) {
            setMobile(true)
        }
    },[]);



    return (
        <div className='container-booking'>

            {!Mobile && (
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
            
            {/* <ActivityProvider> */}
                {/* <FilterProvider>
                    <Card />
                </FilterProvider> */}
            {/* </ActivityProvider> */}

            {/* <Footer /> */}
        </div>
    );
};


export default Booking;