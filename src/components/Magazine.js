import React, {useState, useContext} from "react";
import {MagazineContext} from '../dataContext';

const Magazine = () => {
    const [magazines, setMagazines] = useContext(MagazineContext);
    return (
        <div>
            {magazines.map(magazine => (
                <h1> {magazine.title} </h1>
            ))}
        </div>
    );
};

export default Magazine;