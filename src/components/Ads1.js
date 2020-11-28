import React from "react";
// img
import ad from "../img/ads1.png";

const Ads1 = () => {
    return (
        <div className='ads1'>
            <img src={ad} alt=""/>
            <div className="ads-text">
                <h3>
                    Allenati con noi all'Arco della Pace
                    <br/>
                    Tutte le domeniche
                </h3>
                <button>Scopri di più</button>
            </div>
        </div>
    );
};

export default Ads1;