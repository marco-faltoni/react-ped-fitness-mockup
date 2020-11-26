import React, {useState, useContext} from "react";
// import context
import {ActivityContext} from '../dataContext';
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Attività = () => {
    const [activities, setActivities] = useContext(ActivityContext);

    return (
        <div className='attività'>
            <div className="wrapper-card">
                <div className="next-act">
                    <h3 className='tit'> <span><FontAwesomeIcon icon={faCalendarAlt}/></span> Le tue prossime attività</h3>
                    <div className="actv1">
                        <img src={activities[0].cover} alt=""/>
                        <div className="text">
                            <div className="title">
                                <h3>{activities[0].name}</h3>
                                <FontAwesomeIcon 
                                    icon={faChevronRight} 
                                />
                            </div>
                            <div className="paragraph">
                                <div className="title-para">
                                    <h3>Oggi</h3>
                                    <div className='orari'>
                                        {activities[0].hours.map(hour => (
                                            <p><strong>11.10</strong>  {hour.start}</p>
                                        ))}
                                        <p><FontAwesomeIcon icon={faClock} /> <span>{activities[0].duration} min</span> </p>
                                    </div>
                                    
                                </div>
                                <div className="text-para">
                                    <p> <span>Club</span> <br/>{activities[0].place}</p>
                                    <p> <span>Sala</span> <br/>{activities[0].room}</p>
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div className="actv2">
                        <img src={activities[1].cover} alt=""/>
                        <div className="text">
                            <div className="title">
                                <h3>{activities[1].name}</h3>
                                <FontAwesomeIcon 
                                    icon={faChevronRight} 
                                />
                            </div>
                            <div className="paragraph">
                                <div className="title-para">
                                    <h3>Oggi</h3>
                                    <div className='orari'>
                                        {activities[1].hours.map(hour => (
                                            <p><strong>11.10</strong>  {hour.start}</p>
                                        ))}
                                        <p> <FontAwesomeIcon icon={faClock} /> <span>{activities[1].duration} min</span> </p>
                                    </div>
                                    
                                </div>
                                <div className="text-para">
                                    <p> <span>Club</span> <br/>{activities[1].place}</p>
                                    <p> <span>Sala</span> <br/>{activities[1].room}</p>
                                </div>  
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="today">
                    <h3 className='tit2'>Hai 1 attività in lista d'attesa</h3>
                    <div className="actv1">
                        <img src={activities[0].cover} alt=""/>
                        <div className="text">
                            <div className="title">
                                <h3>{activities[0].name}</h3>
                                <FontAwesomeIcon 
                                    icon={faChevronRight} 
                                />
                            </div>
                            <div className="paragraph">
                                <div className="title-para">
                                    <h3>Oggi</h3>
                                    <div className='orari'>
                                        {activities[0].hours.map(hour => (
                                            <p><strong>11.10</strong>  {hour.start}</p>
                                        ))}
                                        <p><FontAwesomeIcon icon={faClock} /> <span>{activities[0].duration} min</span> </p>
                                    </div>
                                    
                                </div>
                                <div className="text-para">
                                    <span>2 persone prima di te</span>
                                    <button>ANNULLA</button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* {activities.map(activity => (
                <h3> {activity.name} </h3>
            ))} */}
        </div>
    );
};

export default Attività;