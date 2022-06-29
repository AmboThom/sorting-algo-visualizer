import React, { useState, useEffect } from "react";
import './Visualizer.css';

const Visualizer = () => {
    const [ array, setArray ] = useState([]);
    
    useEffect(() => {
        generateArray();
    }, []);
    
    const generateArray = () => {
        let array = [];
        for (let i = 0; i < 20; i++) {
            array.push(randomIntFromInterval(5, 200));
        }
        setArray(array);
    }

    return (
        <div>
        {array && array.map((value, idx) => {
            return (
                <div className="array-bar" key={idx}>
                    {value}
                </div>
            );
        })}
        </div>
    );
};

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}  

export default Visualizer;