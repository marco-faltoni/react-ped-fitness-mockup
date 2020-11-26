import React, {useState, useContext} from "react";
// import Context
import {ActivityProvider, AlertProvider, MagazineProvider} from '../dataContext';
// img
import bg from "../img/bg.png";
//Page Components
import Attività from "../components/Attività";
import Alerts from "../components/Alerts";
import Ads from "../components/Ads";
import Magazine from "../components/Magazine";
import Footer from "../components/Footer";

const Home = () => {
    const [ads1, setAds1] = useState([
        {
            img: ''
        },
        {
            title: "Chiusure straordinarie per vacanze di Natale",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            read: true
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