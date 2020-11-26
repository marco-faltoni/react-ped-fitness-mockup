import React, {useState, useContext} from "react";
import {ActivityContext} from '../dataContext';
//Page Components


const Booking = () => {
    const [activities, setActivities] = useContext(ActivityContext);

    return (
        <div>
            {activities.map(activity => (
                <h1> {activity.name} </h1>
            ))}
        </div>
    );
};


export default Booking;