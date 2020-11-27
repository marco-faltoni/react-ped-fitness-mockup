import React, {useState, useContext, useEffect} from "react";
// import context
import {ActivityContext} from '../dataContext';
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import slider
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

const Attività = () => {
    const [activities, setActivities] = useContext(ActivityContext);
    const [Mobile, setMobile] = useState(false);
    const slides = [];

    for (let i = 0; i < 2; i++) {
        slides.push (
            <SwiperSlide key={`slide-${i}`} className="actv">
                <img src={activities[i].cover} alt=""/>
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
                                {activities[i].hours.map(hour => (
                                    <p><strong>11.10</strong>  {hour.start}</p>
                                ))}
                                <p><FontAwesomeIcon icon={faClock} /> <span>{activities[i].duration} min</span> </p>
                            </div>
                            
                        </div>
                        <div className="text-para">
                            <p> <span>Club</span> <br/>{activities[i].place}</p>
                            <p> <span>Sala</span> <br/>{activities[i].room}</p>
                        </div>  
                    </div>
                </div>
            </SwiperSlide>
        )
    }

    let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

    useEffect(()=> {
        if (isMobile) {
            setMobile(true)
        }
    },[]);

    return (
        <>
            {!Mobile && (
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
                </div>
            )}
            {Mobile && (
                <div className="attività">
                    <div className="wrapper-card">
                        <React.Fragment>
                            <Swiper spaceBetween={15} slidesPerView={1} id='main' className="next-act">
                                <h3 className='tit'> <span><FontAwesomeIcon icon={faCalendarAlt}/></span> Le tue prossime attività</h3>
                                {slides}
                            </Swiper>
                        </React.Fragment>
                    </div>
                    <div className="today">
                            <h3 className='tit2'>Hai 1 attività in lista d'attesa</h3>
                            <div className="actv">
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
            )}
        </>
    );
};

export default Attività;