import React, {useState, useContext, useEffect} from "react";
import {ActivityContext, FilterContext} from '../dataContext';
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSlidersH } from '@fortawesome/free-solid-svg-icons';


const Filtri = () => {
    // context and state
    const [activities, setActivities] = useContext(ActivityContext);
    const [filtered, setFiltered] = useContext(FilterContext);
    const [status, setStatus] = useState('All');
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        filterHandler();
    }, [activities, status]);

    const filterHandler = () => {
        switch (status) {
            case 'Cardiovascolari e Tonificazione':
                setFiltered(activities.filter(activity =>
                    activity.category === 'Cardiovascolari e Tonificazione'
                ))
                break;
            case 'Danza':
                setFiltered(activities.filter(activity =>
                    activity.category === 'Danza'
                ))
                break;
            case 'Pumping':
                setFiltered(activities.filter(activity =>
                    activity.category === 'Pumping'
                ))
                break;
            case 'Crossfit':
                setFiltered(activities.filter(activity =>
                    activity.category === 'Crossfit'
                ))
                break;
            case 'Attività in acqua':
                setFiltered(activities.filter(activity =>
                    activity.category === 'Attività in acqua'
                ))
                break;
            default:
                setFiltered(activities);
                break;   
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    let categories = [];

    const filter = activities.map( activity => {
        if (!categories.includes(activity.category)) {
            return categories.push(activity.category);
        }
    });

    return (
        <div className='filters-mobile'>
            <div className="text">
                <FontAwesomeIcon 
                    icon={faSlidersH} 
                />
                <h3 onClick={toggleHandler}>Filtri</h3>
            </div>
            
            {toggle && (
                <div className="selects">
                    <select name="" id="">
                        <option value={activities[0].place}>{activities[0].place}</option>
                    </select>

                    <select onChange={statusHandler}>
                        <option value="All">Tutte le categorie</option>
                        {categories.map((category, index)=> (
                            <>
                            <option className={category} value={category} id={index}>{category}</option>
                            </>
                        ))}
                    </select>
                    <select name="" id="">
                        <option value="All">Tutte le attività</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default Filtri;