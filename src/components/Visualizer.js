import React, { useState, useEffect } from "react";
import './Visualizer.css';

const Visualizer = () => {
    const [ array, setArray ] = useState([]);
    
    useEffect(() => {
        generateArray();
    }, []);
    
    const generateArray = () => {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 200));
        }
        setArray(array);
    }

    return (
        <div className="absolute left-[100px]">
        {array && array.map((value, idx) => {
            return (
                <div className="w-[2px] inline-block mx-px bg-blue-600"
                 key={idx}
                 style={{height: `${value}px`}}>
                    
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