import React from "react";
// img
import ad from "../img/ads2.png";

const Ads2 = () => {
    return (
        <div className='ads2'>
            <img src={ad} alt=""/>
            <div className="ads-text">
                <h3>Scarica ora la nuova app</h3>
                <div className='btn'>
                    <button>Google Play</button>
                    <button>App Store</button>
                </div>
            </div>
        </div>
    );
};

export default Ads2;