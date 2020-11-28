import React, {useState, useContext, useEffect} from "react";
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Calendario = () => {

    const dates = [];

    const date = new Date(2009, 10, 10);  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });

    // const day = new Date().toLocaleString('en-us', {  weekday: 'long' });
    // console.log(day);

    var weekday = new Array(7);
    weekday[0]="Lunedi";
    weekday[1]="Martedi";
    weekday[2]="Mercoledi";
    weekday[3]="Giovedi";
    weekday[4]="Venerdi";
    weekday[5]="Sabato";
    weekday[6]="Domenica";
    

    // genero le date del calendario
    for (let i = 0; i < 7; i++) {
        dates.push({
            name: weekday[i].split("", 3),
            date: 16 + i,
            month: month.split("", 3),
        })
    }

    // console.log(date);
    

    return (
        <div className='calendar-mobile'>
            <div className="wrapper-calendar">
                <div className="dates">
                    {dates.map((date)=> (
                        <section key={date.date} >
                            <p>{date.name}</p>
                            <h3>{date.date}</h3>
                            <p>{date.month}</p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendario;