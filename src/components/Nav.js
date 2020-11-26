import React from "react";
// import routting
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// animation
import { motion } from "framer-motion";


const Nav = () => {
    const { pathname } = useLocation();
    return (
        <div className="nav">
            <ul>
                <li>
                <Link to="/">Home</Link>
                {/* <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/" ? "50%" : "0%" }}
                /> */}
                </li>
                <li>
                <Link to="/booking">Booking</Link>
                {/* <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                /> */}
                </li>
                <li>
                <Link to="/alerts">Alerts</Link>
                {/* <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                /> */}
                </li>
            </ul>
        </div>
    );
};

export default Nav;