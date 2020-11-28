import React, {useState, useContext, useEffect} from "react";
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
        <div className='wrapper'>
            {filtered.map((filter)=> (

                    <div className="card" key={filter.id}>
                        <div className='img-color'>
                            <div className='color' style={{backgroundColor: filter.color }}></div>
                            <img src={filter.cover} alt=""/>
                        </div>
                        <div className="text">
                            <h3>{filter.name}</h3>
                            <section className='one'>
                                <p>{filter.duration} min</p>
                                <h3>
                                    {filter.hours[0]}
                                    <span>{filter.hours[1]}</span>
                                </h3>
                            </section>
                            <section className='two'>
                                <p>{filter.status}</p>
                            </section>
                            <button className={filter.btnclass}>
                                {filter.btn}
                            </button>
                            <FontAwesomeIcon 
                                icon={faChevronRight} 
                            />
                        </div>
                    </div>
                
            ))}
        </div>
    );
};

export default Card;