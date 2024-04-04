import React, { useState } from 'react';


const Creations = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const handleIncrement5 = () => {
        setCounter(counter + 5);
    };

    const handleDecrement5 = () => {
        setCounter(counter - 5);
    };

    const handleReset = () => {
        setCounter(0);
      };
    

    return (
        <div className="counter-app">
            <h1>Counter</h1>
            <div className="counter-value">{counter}</div>
            <div className="buttons">
                <button onClick={handleDecrement5}>-5</button>
                <button onClick={handleDecrement}>-1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleIncrement}>+1</button>
                <button onClick={handleIncrement5}>+5</button>

            </div>
        </div>
    );
};

export default Creations;