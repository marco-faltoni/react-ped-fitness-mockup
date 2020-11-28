import React, {useState} from "react";
// import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// anim
import {motion} from "framer-motion";


const Alert = ({title, date, description, index, read}) => {
    const [toggle, setToggle] = useState(true);
    const [readToggle, setReadToggle] = useState(read);
    // console.log(read);
    

    const toggleHandler = (i) => {
        setToggle(!toggle);
        setReadToggle(true);
    }

    return (
        <motion.div layout className="alert">
            {!readToggle && (
                <div className="circle"></div>
            )}
            <motion.h3 layout onClick={() => toggleHandler(index)} > {title}
                <span>{date}
                    {readToggle && (
                        <FontAwesomeIcon icon={toggle ? faChevronDown : faChevronRight}/>
                    )}
                    {!readToggle && (
                        <FontAwesomeIcon icon={toggle ? faChevronRight : faChevronDown}/>
                    )}
                </span>
            </motion.h3>

            {toggle && readToggle && (
                <p> {description} </p>
            )}
        </motion.div>
    );
};

export default Alert;