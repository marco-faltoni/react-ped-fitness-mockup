import React, {useContext} from "react";
import {ActivityContext, FilterContext} from '../dataContext';
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    const [activities, setActivities] = useContext(ActivityContext);
    const [filtered, setFiltered] =useContext(FilterContext);

    // useEffect(() => {
    //     setFiltered([...activities]);
    // }, [activities]);

    return (
        <div className='wrapper-mobile'>
            {filtered.map((filter)=> (
                    <div className="card" key={filter.id}>
                        <div className='color' style={{backgroundColor: filter.color }}></div>
                        <div className="text">
                            <section className='one' >
                                <h3>
                                    {filter.hours[0]}
                                    <span>{filter.hours[1]}</span>
                                </h3>
                                <p>{filter.duration} min</p>
                            </section>
                            
                            <section className='two'>
                                <h3>{filter.name}</h3>
                                <FontAwesomeIcon 
                                    icon={faChevronRight} 
                                />
                            </section>
                            <section className='three'>
                                <p>{filter.status}</p>
                                <button className={filter.btnclass}>
                                    {filter.btn}
                                </button>
                            </section>
                            
                            
                        </div>
                    </div>
            ))}
        </div>
    );
};

export default Card;