import React from "react";
// import routting
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCalendarAlt, faBell, faChevronDown} from '@fortawesome/free-solid-svg-icons';
// animation
import { motion } from "framer-motion";


const Nav = () => {
    const { pathname } = useLocation();
    return (
        <div className="nav">
            <ul>
                <li>
                <Link to="/">
                    <FontAwesomeIcon 
                        icon={faHouseUser} 
                    />
                </Link>
                {/* <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/" ? "50%" : "0%" }}
                /> */}
                </li>
                <li>
                <Link to="/booking">
                    <FontAwesomeIcon 
                        icon={faCalendarAlt}
                    />
                </Link>
                {/* <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                /> */}
                </li>
                <li>
                <Link to="/alerts">
                    <FontAwesomeIcon 
                        icon={faBell}
                    />
                </Link>
                {/* <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                /> */}
                </li>
            </ul>
            <div className="account">
                    <FontAwesomeIcon 
                        icon={faChevronDown}
                    />
                <img src="https://images.pexels.com/photos/5373737/pexels-photo-5373737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </div>
        </div>
    );
};

export default Nav;