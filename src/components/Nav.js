import React from "react";
// import routing
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
                        className= {pathname === "/" ? "active" : ""}
                    />
                </Link>
                <motion.div className="line" transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/" ? "30%" : "0%", zIndex: 1 }}>
                </motion.div>
                </li>
                <li>
                <Link to="/booking">
                    <FontAwesomeIcon 
                        icon={faCalendarAlt}
                        className= {pathname === "/booking" ? "active" : ""}
                    />
                </Link>
                <motion.div className="line" transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/booking" ? "30%" : "0%" }}>
                </motion.div>
                </li>
                <li>
                <Link to="/alerts">
                    <FontAwesomeIcon 
                        icon={faBell}
                        className= {pathname === "/alerts" ? "active" : ""}
                    />
                </Link>
                <motion.div className="line" transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/alerts" ? "30%" : "0%" }}>
                </motion.div>
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